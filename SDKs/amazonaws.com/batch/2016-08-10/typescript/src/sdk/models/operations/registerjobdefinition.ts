import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterJobDefinitionHeaders extends SpeakeasyBase {
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


// RegisterJobDefinitionRequestBodyContainerProperties
/** 
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
export class RegisterJobDefinitionRequestBodyContainerProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: shared.KeyValuePair[];

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=fargatePlatformConfiguration" })
  fargatePlatformConfiguration?: shared.FargatePlatformConfiguration;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=jobRoleArn" })
  jobRoleArn?: string;

  @Metadata({ data: "json, name=linuxParameters" })
  linuxParameters?: shared.LinuxParameters;

  @Metadata({ data: "json, name=logConfiguration" })
  logConfiguration?: shared.LogConfiguration;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint })
  mountPoints?: shared.MountPoint[];

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: shared.NetworkConfiguration;

  @Metadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @Metadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: shared.ResourceRequirement[];

  @Metadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: shared.Secret[];

  @Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit })
  ulimits?: shared.Ulimit[];

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: shared.Volume[];
}


// RegisterJobDefinitionRequestBodyNodeProperties
/** 
 * An object representing the node properties of a multi-node parallel job.
**/
export class RegisterJobDefinitionRequestBodyNodeProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=mainNode" })
  mainNode?: number;

  @Metadata({ data: "json, name=nodeRangeProperties", elemType: shared.NodeRangeProperty })
  nodeRangeProperties?: shared.NodeRangeProperty[];

  @Metadata({ data: "json, name=numNodes" })
  numNodes?: number;
}


// RegisterJobDefinitionRequestBodyRetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class RegisterJobDefinitionRequestBodyRetryStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts" })
  attempts?: number;

  @Metadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit })
  evaluateOnExit?: shared.EvaluateOnExit[];
}


// RegisterJobDefinitionRequestBodyTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class RegisterJobDefinitionRequestBodyTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}

export enum RegisterJobDefinitionRequestBodyTypeEnum {
    Container = "container"
,    Multinode = "multinode"
}


export class RegisterJobDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerProperties" })
  containerProperties?: RegisterJobDefinitionRequestBodyContainerProperties;

  @Metadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=nodeProperties" })
  nodeProperties?: RegisterJobDefinitionRequestBodyNodeProperties;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: shared.PlatformCapabilityEnum[];

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @Metadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RegisterJobDefinitionRequestBodyRetryStrategy;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=timeout" })
  timeout?: RegisterJobDefinitionRequestBodyTimeout;

  @Metadata({ data: "json, name=type" })
  type: RegisterJobDefinitionRequestBodyTypeEnum;
}


export class RegisterJobDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterJobDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterJobDefinitionRequestBody;
}


export class RegisterJobDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  registerJobDefinitionResponse?: shared.RegisterJobDefinitionResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
