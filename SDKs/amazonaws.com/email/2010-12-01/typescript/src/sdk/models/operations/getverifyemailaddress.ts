import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}

export enum GetVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyEmailAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyEmailAddressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyEmailAddressVersionEnum;
}


export class GetVerifyEmailAddressHeaders extends SpeakeasyBase {
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


export class GetVerifyEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVerifyEmailAddressQueryParams;

  @SpeakeasyMetadata()
  headers: GetVerifyEmailAddressHeaders;
}


export class GetVerifyEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
