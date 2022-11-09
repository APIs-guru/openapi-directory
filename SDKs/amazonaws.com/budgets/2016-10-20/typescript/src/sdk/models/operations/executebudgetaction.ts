import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExecuteBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayExecuteBudgetAction = "AWSBudgetServiceGateway.ExecuteBudgetAction"
}


export class ExecuteBudgetActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExecuteBudgetActionXAmzTargetEnum;
}


export class ExecuteBudgetActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteBudgetActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExecuteBudgetActionRequest;
}


export class ExecuteBudgetActionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  executeBudgetActionResponse?: shared.ExecuteBudgetActionResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  resourceLockedException?: any;

  @Metadata()
  statusCode: number;
}
