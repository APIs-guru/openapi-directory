import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetProjectsXAmzTargetEnum {
    CodeBuild20161006BatchGetProjects = "CodeBuild_20161006.BatchGetProjects"
}


export class BatchGetProjectsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetProjectsXAmzTargetEnum;
}


export class BatchGetProjectsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetProjectsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetProjectsInput;
}


export class BatchGetProjectsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetProjectsOutput?: shared.BatchGetProjectsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
