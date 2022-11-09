import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeContributorInsightsXAmzTargetEnum {
    DynamoDb20120810DescribeContributorInsights = "DynamoDB_20120810.DescribeContributorInsights"
}


export class DescribeContributorInsightsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeContributorInsightsXAmzTargetEnum;
}


export class DescribeContributorInsightsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeContributorInsightsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeContributorInsightsInput;
}


export class DescribeContributorInsightsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeContributorInsightsOutput?: shared.DescribeContributorInsightsOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
