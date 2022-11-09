import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceStopNotebookExecution = "ElasticMapReduce.StopNotebookExecution"
}


export class StopNotebookExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopNotebookExecutionXAmzTargetEnum;
}


export class StopNotebookExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopNotebookExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopNotebookExecutionInput;
}


export class StopNotebookExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
