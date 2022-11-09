import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSubscribersForNotificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeSubscribersForNotificationXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeSubscribersForNotification = "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
}


export class DescribeSubscribersForNotificationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSubscribersForNotificationXAmzTargetEnum;
}


export class DescribeSubscribersForNotificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeSubscribersForNotificationQueryParams;

  @Metadata()
  headers: DescribeSubscribersForNotificationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSubscribersForNotificationRequest;
}


export class DescribeSubscribersForNotificationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeSubscribersForNotificationResponse?: shared.DescribeSubscribersForNotificationResponse;

  @Metadata()
  expiredNextTokenException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
