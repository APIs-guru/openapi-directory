import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeNotificationsForBudgetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeNotificationsForBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeNotificationsForBudget = "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
}


export class DescribeNotificationsForBudgetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeNotificationsForBudgetXAmzTargetEnum;
}


export class DescribeNotificationsForBudgetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeNotificationsForBudgetQueryParams;

  @Metadata()
  headers: DescribeNotificationsForBudgetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeNotificationsForBudgetRequest;
}


export class DescribeNotificationsForBudgetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeNotificationsForBudgetResponse?: shared.DescribeNotificationsForBudgetResponse;

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
