import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartBuildXAmzTargetEnum {
    CodeBuild20161006StartBuild = "CodeBuild_20161006.StartBuild"
}


export class StartBuildHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartBuildXAmzTargetEnum;
}


export class StartBuildRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartBuildHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartBuildInput;
}


export class StartBuildResponse extends SpeakeasyBase {
  @Metadata()
  accountLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startBuildOutput?: shared.StartBuildOutput;

  @Metadata()
  statusCode: number;
}
