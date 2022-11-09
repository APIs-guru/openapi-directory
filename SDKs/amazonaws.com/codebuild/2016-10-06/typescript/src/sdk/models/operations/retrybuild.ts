import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RetryBuildXAmzTargetEnum {
    CodeBuild20161006RetryBuild = "CodeBuild_20161006.RetryBuild"
}


export class RetryBuildHeaders extends SpeakeasyBase {
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
  xAmzTarget: RetryBuildXAmzTargetEnum;
}


export class RetryBuildRequest extends SpeakeasyBase {
  @Metadata()
  headers: RetryBuildHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetryBuildInput;
}


export class RetryBuildResponse extends SpeakeasyBase {
  @Metadata()
  accountLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryBuildOutput?: shared.RetryBuildOutput;

  @Metadata()
  statusCode: number;
}
