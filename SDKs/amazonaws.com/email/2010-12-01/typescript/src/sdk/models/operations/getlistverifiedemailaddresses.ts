import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListVerifiedEmailAddressesActionEnum {
    ListVerifiedEmailAddresses = "ListVerifiedEmailAddresses"
}

export enum GetListVerifiedEmailAddressesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListVerifiedEmailAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListVerifiedEmailAddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListVerifiedEmailAddressesVersionEnum;
}


export class GetListVerifiedEmailAddressesHeaders extends SpeakeasyBase {
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


export class GetListVerifiedEmailAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListVerifiedEmailAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: GetListVerifiedEmailAddressesHeaders;
}


export class GetListVerifiedEmailAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
