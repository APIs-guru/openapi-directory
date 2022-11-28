import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetCustomVerificationEmailTemplateActionEnum {
    GetCustomVerificationEmailTemplate = "GetCustomVerificationEmailTemplate"
}

export enum GetGetCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetCustomVerificationEmailTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetCustomVerificationEmailTemplateVersionEnum;
}


export class GetGetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetGetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetCustomVerificationEmailTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetCustomVerificationEmailTemplateHeaders;
}


export class GetGetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
