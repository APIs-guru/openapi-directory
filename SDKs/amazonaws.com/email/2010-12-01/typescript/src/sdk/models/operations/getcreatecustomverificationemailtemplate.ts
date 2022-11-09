import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateCustomVerificationEmailTemplateActionEnum {
    CreateCustomVerificationEmailTemplate = "CreateCustomVerificationEmailTemplate"
}

export enum GetCreateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateCustomVerificationEmailTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FailureRedirectionURL" })
  failureRedirectionUrl: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FromEmailAddress" })
  fromEmailAddress: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SuccessRedirectionURL" })
  successRedirectionUrl: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateContent" })
  templateContent: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateSubject" })
  templateSubject: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateCustomVerificationEmailTemplateVersionEnum;
}


export class GetCreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class GetCreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateCustomVerificationEmailTemplateQueryParams;

  @Metadata()
  headers: GetCreateCustomVerificationEmailTemplateHeaders;
}


export class GetCreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
