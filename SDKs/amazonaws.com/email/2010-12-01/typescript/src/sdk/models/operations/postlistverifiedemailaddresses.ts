import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostListVerifiedEmailAddressesActionEnum {
    ListVerifiedEmailAddresses = "ListVerifiedEmailAddresses"
}

export enum PostListVerifiedEmailAddressesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostListVerifiedEmailAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListVerifiedEmailAddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListVerifiedEmailAddressesVersionEnum;
}


export class PostListVerifiedEmailAddressesHeaders extends SpeakeasyBase {
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


export class PostListVerifiedEmailAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostListVerifiedEmailAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: PostListVerifiedEmailAddressesHeaders;
}


export class PostListVerifiedEmailAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
