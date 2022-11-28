import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateUsagePlanHeaders extends SpeakeasyBase {
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


// CreateUsagePlanRequestBodyQuota
/** 
 * Quotas configured for a usage plan.
**/
export class CreateUsagePlanRequestBodyQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: shared.QuotaPeriodTypeEnum;
}


// CreateUsagePlanRequestBodyThrottle
/** 
 *  The API request rate limits.
**/
export class CreateUsagePlanRequestBodyThrottle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=burstLimit" })
  burstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=rateLimit" })
  rateLimit?: number;
}


export class CreateUsagePlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiStages", elemType: shared.ApiStage })
  apiStages?: shared.ApiStage[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: CreateUsagePlanRequestBodyQuota;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=throttle" })
  throttle?: CreateUsagePlanRequestBodyThrottle;
}


export class CreateUsagePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateUsagePlanHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateUsagePlanRequestBody;
}


export class CreateUsagePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  usagePlan?: shared.UsagePlan;
}
