import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeBudgetActionsForAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeBudgetActionsForAccountXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetActionsForAccount = "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
}


export class DescribeBudgetActionsForAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeBudgetActionsForAccountXAmzTargetEnum;
}


export class DescribeBudgetActionsForAccountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeBudgetActionsForAccountQueryParams;

  @Metadata()
  headers: DescribeBudgetActionsForAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeBudgetActionsForAccountRequest;
}


export class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeBudgetActionsForAccountResponse?: shared.DescribeBudgetActionsForAccountResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;
}
