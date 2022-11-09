import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSendCustomVerificationEmailActionEnum {
    SendCustomVerificationEmail = "SendCustomVerificationEmail"
}

export enum GetSendCustomVerificationEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSendCustomVerificationEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSendCustomVerificationEmailActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSendCustomVerificationEmailVersionEnum;
}


export class GetSendCustomVerificationEmailHeaders extends SpeakeasyBase {
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


export class GetSendCustomVerificationEmailRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSendCustomVerificationEmailQueryParams;

  @Metadata()
  headers: GetSendCustomVerificationEmailHeaders;
}


export class GetSendCustomVerificationEmailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
