import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateCustomVerificationEmailTemplateActionEnum {
    CreateCustomVerificationEmailTemplate = "CreateCustomVerificationEmailTemplate"
}

export enum GetCreateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateCustomVerificationEmailTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FailureRedirectionURL" })
  failureRedirectionUrl: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromEmailAddress" })
  fromEmailAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SuccessRedirectionURL" })
  successRedirectionUrl: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateContent" })
  templateContent: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateSubject" })
  templateSubject: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateCustomVerificationEmailTemplateVersionEnum;
}


export class GetCreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class GetCreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateCustomVerificationEmailTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateCustomVerificationEmailTemplateHeaders;
}


export class GetCreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
