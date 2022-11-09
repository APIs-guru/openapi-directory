import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayUpdateBudgetAction = "AWSBudgetServiceGateway.UpdateBudgetAction"
}


export class UpdateBudgetActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateBudgetActionXAmzTargetEnum;
}


export class UpdateBudgetActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateBudgetActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateBudgetActionRequest;
}


export class UpdateBudgetActionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

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

  @Metadata()
  updateBudgetActionResponse?: shared.UpdateBudgetActionResponse;
}
