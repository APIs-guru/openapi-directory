import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDeleteBuildsXAmzTargetEnum {
    CodeBuild20161006BatchDeleteBuilds = "CodeBuild_20161006.BatchDeleteBuilds"
}


export class BatchDeleteBuildsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDeleteBuildsXAmzTargetEnum;
}


export class BatchDeleteBuildsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDeleteBuildsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDeleteBuildsInput;
}


export class BatchDeleteBuildsResponse extends SpeakeasyBase {
  @Metadata()
  batchDeleteBuildsOutput?: shared.BatchDeleteBuildsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
