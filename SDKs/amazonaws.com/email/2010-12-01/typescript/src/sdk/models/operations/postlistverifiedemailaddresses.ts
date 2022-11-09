import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListVerifiedEmailAddressesActionEnum {
    ListVerifiedEmailAddresses = "ListVerifiedEmailAddresses"
}

export enum PostListVerifiedEmailAddressesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostListVerifiedEmailAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListVerifiedEmailAddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListVerifiedEmailAddressesVersionEnum;
}


export class PostListVerifiedEmailAddressesHeaders extends SpeakeasyBase {
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


export class PostListVerifiedEmailAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListVerifiedEmailAddressesQueryParams;

  @Metadata()
  headers: PostListVerifiedEmailAddressesHeaders;
}


export class PostListVerifiedEmailAddressesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
