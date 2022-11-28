import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSendCustomVerificationEmailActionEnum {
    SendCustomVerificationEmail = "SendCustomVerificationEmail"
}

export enum GetSendCustomVerificationEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSendCustomVerificationEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSendCustomVerificationEmailActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSendCustomVerificationEmailVersionEnum;
}


export class GetSendCustomVerificationEmailHeaders extends SpeakeasyBase {
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


export class GetSendCustomVerificationEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSendCustomVerificationEmailQueryParams;

  @SpeakeasyMetadata()
  headers: GetSendCustomVerificationEmailHeaders;
}


export class GetSendCustomVerificationEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
