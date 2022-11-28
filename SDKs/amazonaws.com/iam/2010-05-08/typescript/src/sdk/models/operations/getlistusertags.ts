import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListUserTagsActionEnum {
    ListUserTags = "ListUserTags"
}

export enum GetListUserTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListUserTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListUserTagsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListUserTagsVersionEnum;
}


export class GetListUserTagsHeaders extends SpeakeasyBase {
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


export class GetListUserTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListUserTagsQueryParams;

  @SpeakeasyMetadata()
  headers: GetListUserTagsHeaders;
}


export class GetListUserTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
