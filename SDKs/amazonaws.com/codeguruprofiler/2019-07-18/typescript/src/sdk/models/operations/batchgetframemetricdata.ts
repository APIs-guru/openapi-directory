import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGetFrameMetricDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}

export enum BatchGetFrameMetricDataTargetResolutionEnum {
    Pt5M = "PT5M"
,    Pt1H = "PT1H"
,    P1D = "P1D"
}


export class BatchGetFrameMetricDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=targetResolution" })
  targetResolution?: BatchGetFrameMetricDataTargetResolutionEnum;
}


export class BatchGetFrameMetricDataHeaders extends SpeakeasyBase {
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
}


export class BatchGetFrameMetricDataRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameMetrics", elemType: shared.FrameMetric })
  frameMetrics?: shared.FrameMetric[];
}


export class BatchGetFrameMetricDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchGetFrameMetricDataPathParams;

  @Metadata()
  queryParams: BatchGetFrameMetricDataQueryParams;

  @Metadata()
  headers: BatchGetFrameMetricDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchGetFrameMetricDataRequestBody;
}


export class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
  @Metadata()
  batchGetFrameMetricDataResponse?: shared.BatchGetFrameMetricDataResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
