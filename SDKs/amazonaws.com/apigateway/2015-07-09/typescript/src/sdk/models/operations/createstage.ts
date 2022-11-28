import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateStageHeaders extends SpeakeasyBase {
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

export enum CreateStageRequestBodyCacheClusterSizeEnum {
    Zero5 = "0.5",
    One6 = "1.6",
    Six1 = "6.1",
    Thirteen5 = "13.5",
    TwentyEight4 = "28.4",
    FiftyEight2 = "58.2",
    OneHundredAndEighteen = "118",
    TwoHundredAndThirtySeven = "237"
}


// CreateStageRequestBodyCanarySettings
/** 
 * Configuration settings of a canary deployment.
**/
export class CreateStageRequestBodyCanarySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @SpeakeasyMetadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}


export class CreateStageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CreateStageRequestBodyCacheClusterSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=canarySettings" })
  canarySettings?: CreateStageRequestBodyCanarySettings;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationVersion" })
  documentationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: Map<string, string>;
}


export class CreateStageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateStagePathParams;

  @SpeakeasyMetadata()
  headers: CreateStageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStageRequestBody;
}


export class CreateStageResponse extends SpeakeasyBase {
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
  stage?: shared.Stage;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
