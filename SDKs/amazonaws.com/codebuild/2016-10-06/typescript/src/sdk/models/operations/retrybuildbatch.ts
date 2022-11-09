import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RetryBuildBatchXAmzTargetEnum {
    CodeBuild20161006RetryBuildBatch = "CodeBuild_20161006.RetryBuildBatch"
}


export class RetryBuildBatchHeaders extends SpeakeasyBase {
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
  xAmzTarget: RetryBuildBatchXAmzTargetEnum;
}


export class RetryBuildBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: RetryBuildBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetryBuildBatchInput;
}


export class RetryBuildBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryBuildBatchOutput?: shared.RetryBuildBatchOutput;

  @Metadata()
  statusCode: number;
}
