import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReportTaskProgressXAmzTargetEnum {
    DataPipelineReportTaskProgress = "DataPipeline.ReportTaskProgress"
}


export class ReportTaskProgressHeaders extends SpeakeasyBase {
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
  xAmzTarget: ReportTaskProgressXAmzTargetEnum;
}


export class ReportTaskProgressRequest extends SpeakeasyBase {
  @Metadata()
  headers: ReportTaskProgressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportTaskProgressInput;
}


export class ReportTaskProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  pipelineDeletedException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  reportTaskProgressOutput?: shared.ReportTaskProgressOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskNotFoundException?: any;
}
