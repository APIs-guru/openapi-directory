import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostEnableMetricsCollectionActionEnum {
    EnableMetricsCollection = "EnableMetricsCollection"
}

export enum PostEnableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostEnableMetricsCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostEnableMetricsCollectionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostEnableMetricsCollectionVersionEnum;
}


export class PostEnableMetricsCollectionHeaders extends SpeakeasyBase {
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


export class PostEnableMetricsCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostEnableMetricsCollectionQueryParams;

  @SpeakeasyMetadata()
  headers: PostEnableMetricsCollectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostEnableMetricsCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
