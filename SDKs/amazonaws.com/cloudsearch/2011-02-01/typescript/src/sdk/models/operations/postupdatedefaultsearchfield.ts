import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostUpdateDefaultSearchFieldActionEnum {
    UpdateDefaultSearchField = "UpdateDefaultSearchField"
}

export enum PostUpdateDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class PostUpdateDefaultSearchFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateDefaultSearchFieldActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateDefaultSearchFieldVersionEnum;
}


export class PostUpdateDefaultSearchFieldHeaders extends SpeakeasyBase {
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


export class PostUpdateDefaultSearchFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUpdateDefaultSearchFieldQueryParams;

  @SpeakeasyMetadata()
  headers: PostUpdateDefaultSearchFieldHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateDefaultSearchFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
