import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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

export enum CreateDeploymentRequestBodyCacheClusterSizeEnum {
    Zero5 = "0.5",
    One6 = "1.6",
    Six1 = "6.1",
    Thirteen5 = "13.5",
    TwentyEight4 = "28.4",
    FiftyEight2 = "58.2",
    OneHundredAndEighteen = "118",
    TwoHundredAndThirtySeven = "237"
}


// CreateDeploymentRequestBodyCanarySettings
/** 
 * The input configuration for a canary deployment.
**/
export class CreateDeploymentRequestBodyCanarySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @SpeakeasyMetadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CreateDeploymentRequestBodyCacheClusterSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=canarySettings" })
  canarySettings?: CreateDeploymentRequestBodyCanarySettings;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=stageDescription" })
  stageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: Map<string, string>;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDeploymentPathParams;

  @SpeakeasyMetadata()
  headers: CreateDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deployment?: shared.Deployment;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
