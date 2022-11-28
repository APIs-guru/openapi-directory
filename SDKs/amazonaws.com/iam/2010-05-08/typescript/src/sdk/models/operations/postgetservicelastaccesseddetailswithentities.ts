import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetServiceLastAccessedDetailsWithEntitiesActionEnum {
    GetServiceLastAccessedDetailsWithEntities = "GetServiceLastAccessedDetailsWithEntities"
}

export enum PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetServiceLastAccessedDetailsWithEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetServiceLastAccessedDetailsWithEntitiesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
}


export class PostGetServiceLastAccessedDetailsWithEntitiesHeaders extends SpeakeasyBase {
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


export class PostGetServiceLastAccessedDetailsWithEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetServiceLastAccessedDetailsWithEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetServiceLastAccessedDetailsWithEntitiesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
