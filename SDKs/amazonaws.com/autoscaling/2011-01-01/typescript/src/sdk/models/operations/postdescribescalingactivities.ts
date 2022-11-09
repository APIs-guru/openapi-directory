import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeScalingActivitiesActionEnum {
    DescribeScalingActivities = "DescribeScalingActivities"
}

export enum PostDescribeScalingActivitiesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeScalingActivitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeScalingActivitiesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeScalingActivitiesVersionEnum;
}


export class PostDescribeScalingActivitiesHeaders extends SpeakeasyBase {
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


export class PostDescribeScalingActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeScalingActivitiesQueryParams;

  @Metadata()
  headers: PostDescribeScalingActivitiesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeScalingActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
