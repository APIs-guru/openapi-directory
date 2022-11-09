import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateStageHeaders extends SpeakeasyBase {
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

export enum CreateStageRequestBodyCacheClusterSizeEnum {
    Zero5 = "0.5"
,    One6 = "1.6"
,    Six1 = "6.1"
,    Thirteen5 = "13.5"
,    TwentyEight4 = "28.4"
,    FiftyEight2 = "58.2"
,    OneHundredAndEighteen = "118"
,    TwoHundredAndThirtySeven = "237"
}


// CreateStageRequestBodyCanarySettings
/** 
 * Configuration settings of a canary deployment.
**/
export class CreateStageRequestBodyCanarySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @Metadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}


export class CreateStageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @Metadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CreateStageRequestBodyCacheClusterSizeEnum;

  @Metadata({ data: "json, name=canarySettings" })
  canarySettings?: CreateStageRequestBodyCanarySettings;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=documentationVersion" })
  documentationVersion?: string;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @Metadata({ data: "json, name=variables" })
  variables?: Map<string, string>;
}


export class CreateStageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateStagePathParams;

  @Metadata()
  headers: CreateStageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateStageRequestBody;
}


export class CreateStageResponse extends SpeakeasyBase {
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
  stage?: shared.Stage;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
