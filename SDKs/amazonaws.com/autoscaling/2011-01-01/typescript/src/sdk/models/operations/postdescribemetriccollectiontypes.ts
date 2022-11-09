import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeMetricCollectionTypesActionEnum {
    DescribeMetricCollectionTypes = "DescribeMetricCollectionTypes"
}

export enum PostDescribeMetricCollectionTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeMetricCollectionTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeMetricCollectionTypesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeMetricCollectionTypesVersionEnum;
}


export class PostDescribeMetricCollectionTypesHeaders extends SpeakeasyBase {
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


export class PostDescribeMetricCollectionTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeMetricCollectionTypesQueryParams;

  @Metadata()
  headers: PostDescribeMetricCollectionTypesHeaders;
}


export class PostDescribeMetricCollectionTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
