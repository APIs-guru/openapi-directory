import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetCustomVerificationEmailTemplateActionEnum {
    GetCustomVerificationEmailTemplate = "GetCustomVerificationEmailTemplate"
}

export enum GetGetCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetCustomVerificationEmailTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetCustomVerificationEmailTemplateVersionEnum;
}


export class GetGetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetGetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetCustomVerificationEmailTemplateQueryParams;

  @Metadata()
  headers: GetGetCustomVerificationEmailTemplateHeaders;
}


export class GetGetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
