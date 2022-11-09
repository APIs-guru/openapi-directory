import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteVerifiedEmailAddressActionEnum {
    DeleteVerifiedEmailAddress = "DeleteVerifiedEmailAddress"
}

export enum PostDeleteVerifiedEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostDeleteVerifiedEmailAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteVerifiedEmailAddressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteVerifiedEmailAddressVersionEnum;
}


export class PostDeleteVerifiedEmailAddressHeaders extends SpeakeasyBase {
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


export class PostDeleteVerifiedEmailAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteVerifiedEmailAddressQueryParams;

  @Metadata()
  headers: PostDeleteVerifiedEmailAddressHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteVerifiedEmailAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
