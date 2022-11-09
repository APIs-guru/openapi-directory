import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


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


// CreateDeploymentRequestBodyDeploymentPolicies
/** 
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export class CreateDeploymentRequestBodyDeploymentPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentUpdatePolicy" })
  componentUpdatePolicy?: shared.DeploymentComponentUpdatePolicy;

  @Metadata({ data: "json, name=configurationValidationPolicy" })
  configurationValidationPolicy?: shared.DeploymentConfigurationValidationPolicy;

  @Metadata({ data: "json, name=failureHandlingPolicy" })
  failureHandlingPolicy?: shared.DeploymentFailureHandlingPolicyEnum;
}


// CreateDeploymentRequestBodyIotJobConfiguration
/** 
 * Contains information about an IoT job configuration.
**/
export class CreateDeploymentRequestBodyIotJobConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: shared.IoTJobAbortConfig;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: shared.IoTJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: shared.IoTJobTimeoutConfig;
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=components", elemType: shared.ComponentDeploymentSpecification })
  components?: Map<string, shared.ComponentDeploymentSpecification>;

  @Metadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @Metadata({ data: "json, name=deploymentPolicies" })
  deploymentPolicies?: CreateDeploymentRequestBodyDeploymentPolicies;

  @Metadata({ data: "json, name=iotJobConfiguration" })
  iotJobConfiguration?: CreateDeploymentRequestBodyIotJobConfiguration;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentResponse?: shared.CreateDeploymentResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  requestAlreadyInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
