import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}

export enum PostReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostReplaceNetworkAclEntryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostReplaceNetworkAclEntryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostReplaceNetworkAclEntryVersionEnum;
}


export class PostReplaceNetworkAclEntryHeaders extends SpeakeasyBase {
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


export class PostReplaceNetworkAclEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReplaceNetworkAclEntryQueryParams;

  @SpeakeasyMetadata()
  headers: PostReplaceNetworkAclEntryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostReplaceNetworkAclEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
