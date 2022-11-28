import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



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


// CreateDeploymentRequestBodyDeploymentPolicies
/** 
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export class CreateDeploymentRequestBodyDeploymentPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentUpdatePolicy" })
  componentUpdatePolicy?: shared.DeploymentComponentUpdatePolicy;

  @SpeakeasyMetadata({ data: "json, name=configurationValidationPolicy" })
  configurationValidationPolicy?: shared.DeploymentConfigurationValidationPolicy;

  @SpeakeasyMetadata({ data: "json, name=failureHandlingPolicy" })
  failureHandlingPolicy?: shared.DeploymentFailureHandlingPolicyEnum;
}


// CreateDeploymentRequestBodyIotJobConfiguration
/** 
 * Contains information about an IoT job configuration.
**/
export class CreateDeploymentRequestBodyIotJobConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: shared.IoTJobAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: shared.IoTJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: shared.IoTJobTimeoutConfig;
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentDeploymentSpecification })
  components?: Map<string, shared.ComponentDeploymentSpecification>;

  @SpeakeasyMetadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentPolicies" })
  deploymentPolicies?: CreateDeploymentRequestBodyDeploymentPolicies;

  @SpeakeasyMetadata({ data: "json, name=iotJobConfiguration" })
  iotJobConfiguration?: CreateDeploymentRequestBodyIotJobConfiguration;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDeploymentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentResponse?: shared.CreateDeploymentResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  requestAlreadyInProgressException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
