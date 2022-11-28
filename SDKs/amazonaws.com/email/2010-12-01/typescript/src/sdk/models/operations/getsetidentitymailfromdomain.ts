import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetIdentityMailFromDomainActionEnum {
    SetIdentityMailFromDomain = "SetIdentityMailFromDomain"
}

export enum GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum {
    UseDefaultValue = "UseDefaultValue",
    RejectMessage = "RejectMessage"
}

export enum GetSetIdentityMailFromDomainVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetIdentityMailFromDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIdentityMailFromDomainActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BehaviorOnMXFailure" })
  behaviorOnMxFailure?: GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MailFromDomain" })
  mailFromDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIdentityMailFromDomainVersionEnum;
}


export class GetSetIdentityMailFromDomainHeaders extends SpeakeasyBase {
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


export class GetSetIdentityMailFromDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetIdentityMailFromDomainQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetIdentityMailFromDomainHeaders;
}


export class GetSetIdentityMailFromDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
