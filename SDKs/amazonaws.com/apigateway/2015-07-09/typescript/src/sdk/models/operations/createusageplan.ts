import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUsagePlanHeaders extends SpeakeasyBase {
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


// CreateUsagePlanRequestBodyQuota
/** 
 * Quotas configured for a usage plan.
**/
export class CreateUsagePlanRequestBodyQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=period" })
  period?: shared.QuotaPeriodTypeEnum;
}


// CreateUsagePlanRequestBodyThrottle
/** 
 *  The API request rate limits.
**/
export class CreateUsagePlanRequestBodyThrottle extends SpeakeasyBase {
  @Metadata({ data: "json, name=burstLimit" })
  burstLimit?: number;

  @Metadata({ data: "json, name=rateLimit" })
  rateLimit?: number;
}


export class CreateUsagePlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiStages", elemType: shared.ApiStage })
  apiStages?: shared.ApiStage[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=quota" })
  quota?: CreateUsagePlanRequestBodyQuota;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=throttle" })
  throttle?: CreateUsagePlanRequestBodyThrottle;
}


export class CreateUsagePlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUsagePlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateUsagePlanRequestBody;
}


export class CreateUsagePlanResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  usagePlan?: shared.UsagePlan;
}
