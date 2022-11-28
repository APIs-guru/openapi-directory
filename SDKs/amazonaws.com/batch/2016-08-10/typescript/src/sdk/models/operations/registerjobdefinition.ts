import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterJobDefinitionHeaders extends SpeakeasyBase {
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


// RegisterJobDefinitionRequestBodyContainerProperties
/** 
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
export class RegisterJobDefinitionRequestBodyContainerProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: shared.KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fargatePlatformConfiguration" })
  fargatePlatformConfiguration?: shared.FargatePlatformConfiguration;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=jobRoleArn" })
  jobRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=linuxParameters" })
  linuxParameters?: shared.LinuxParameters;

  @SpeakeasyMetadata({ data: "json, name=logConfiguration" })
  logConfiguration?: shared.LogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=mountPoints", elemType: shared.MountPoint })
  mountPoints?: shared.MountPoint[];

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: shared.NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: shared.ResourceRequirement[];

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: shared.Secret[];

  @SpeakeasyMetadata({ data: "json, name=ulimits", elemType: shared.Ulimit })
  ulimits?: shared.Ulimit[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: shared.Volume[];
}


// RegisterJobDefinitionRequestBodyNodeProperties
/** 
 * An object representing the node properties of a multi-node parallel job.
**/
export class RegisterJobDefinitionRequestBodyNodeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mainNode" })
  mainNode?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeRangeProperties", elemType: shared.NodeRangeProperty })
  nodeRangeProperties?: shared.NodeRangeProperty[];

  @SpeakeasyMetadata({ data: "json, name=numNodes" })
  numNodes?: number;
}


// RegisterJobDefinitionRequestBodyRetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class RegisterJobDefinitionRequestBodyRetryStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts" })
  attempts?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit })
  evaluateOnExit?: shared.EvaluateOnExit[];
}


// RegisterJobDefinitionRequestBodyTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class RegisterJobDefinitionRequestBodyTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}

export enum RegisterJobDefinitionRequestBodyTypeEnum {
    Container = "container",
    Multinode = "multinode"
}


export class RegisterJobDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerProperties" })
  containerProperties?: RegisterJobDefinitionRequestBodyContainerProperties;

  @SpeakeasyMetadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=nodeProperties" })
  nodeProperties?: RegisterJobDefinitionRequestBodyNodeProperties;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: shared.PlatformCapabilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RegisterJobDefinitionRequestBodyRetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: RegisterJobDefinitionRequestBodyTimeout;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: RegisterJobDefinitionRequestBodyTypeEnum;
}


export class RegisterJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterJobDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RegisterJobDefinitionRequestBody;
}


export class RegisterJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  registerJobDefinitionResponse?: shared.RegisterJobDefinitionResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
