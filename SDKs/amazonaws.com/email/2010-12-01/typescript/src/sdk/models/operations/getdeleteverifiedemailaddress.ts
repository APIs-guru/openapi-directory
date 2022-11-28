import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVerifiedEmailAddressActionEnum {
    DeleteVerifiedEmailAddress = "DeleteVerifiedEmailAddress"
}

export enum GetDeleteVerifiedEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteVerifiedEmailAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVerifiedEmailAddressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVerifiedEmailAddressVersionEnum;
}


export class GetDeleteVerifiedEmailAddressHeaders extends SpeakeasyBase {
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


export class GetDeleteVerifiedEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVerifiedEmailAddressQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVerifiedEmailAddressHeaders;
}


export class GetDeleteVerifiedEmailAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
