import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchGetFrameMetricDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}

export enum BatchGetFrameMetricDataTargetResolutionEnum {
    Pt5M = "PT5M",
    Pt1H = "PT1H",
    P1D = "P1D"
}


export class BatchGetFrameMetricDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetResolution" })
  targetResolution?: BatchGetFrameMetricDataTargetResolutionEnum;
}


export class BatchGetFrameMetricDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class BatchGetFrameMetricDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameMetrics", elemType: shared.FrameMetric })
  frameMetrics?: shared.FrameMetric[];
}


export class BatchGetFrameMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchGetFrameMetricDataPathParams;

  @SpeakeasyMetadata()
  queryParams: BatchGetFrameMetricDataQueryParams;

  @SpeakeasyMetadata()
  headers: BatchGetFrameMetricDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchGetFrameMetricDataRequestBody;
}


export class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetFrameMetricDataResponse?: shared.BatchGetFrameMetricDataResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
