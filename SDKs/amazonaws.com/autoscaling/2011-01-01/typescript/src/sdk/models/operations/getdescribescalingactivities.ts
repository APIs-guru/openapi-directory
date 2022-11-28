import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeScalingActivitiesActionEnum {
    DescribeScalingActivities = "DescribeScalingActivities"
}

export enum GetDescribeScalingActivitiesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeScalingActivitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeScalingActivitiesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActivityIds" })
  activityIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeDeletedGroups" })
  includeDeletedGroups?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeScalingActivitiesVersionEnum;
}


export class GetDescribeScalingActivitiesHeaders extends SpeakeasyBase {
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


export class GetDescribeScalingActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeScalingActivitiesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeScalingActivitiesHeaders;
}


export class GetDescribeScalingActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
