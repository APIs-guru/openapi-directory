import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}

export enum GetVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyEmailIdentityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyEmailIdentityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyEmailIdentityVersionEnum;
}


export class GetVerifyEmailIdentityHeaders extends SpeakeasyBase {
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


export class GetVerifyEmailIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVerifyEmailIdentityQueryParams;

  @SpeakeasyMetadata()
  headers: GetVerifyEmailIdentityHeaders;
}


export class GetVerifyEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
