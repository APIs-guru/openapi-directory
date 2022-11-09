import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateBudgetAction = "AWSBudgetServiceGateway.CreateBudgetAction"
}


export class CreateBudgetActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateBudgetActionXAmzTargetEnum;
}


export class CreateBudgetActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBudgetActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBudgetActionRequest;
}


export class CreateBudgetActionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBudgetActionResponse?: shared.CreateBudgetActionResponse;

  @Metadata()
  creationLimitExceededException?: any;

  @Metadata()
  duplicateRecordException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
