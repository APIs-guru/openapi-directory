import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateDeploymentHeaders extends SpeakeasyBase {
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

export enum CreateDeploymentRequestBodyCacheClusterSizeEnum {
    Zero5 = "0.5"
,    One6 = "1.6"
,    Six1 = "6.1"
,    Thirteen5 = "13.5"
,    TwentyEight4 = "28.4"
,    FiftyEight2 = "58.2"
,    OneHundredAndEighteen = "118"
,    TwoHundredAndThirtySeven = "237"
}


// CreateDeploymentRequestBodyCanarySettings
/** 
 * The input configuration for a canary deployment.
**/
export class CreateDeploymentRequestBodyCanarySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @Metadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @Metadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CreateDeploymentRequestBodyCacheClusterSizeEnum;

  @Metadata({ data: "json, name=canarySettings" })
  canarySettings?: CreateDeploymentRequestBodyCanarySettings;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=stageDescription" })
  stageDescription?: string;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @Metadata({ data: "json, name=variables" })
  variables?: Map<string, string>;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeploymentPathParams;

  @Metadata()
  headers: CreateDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deployment?: shared.Deployment;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
