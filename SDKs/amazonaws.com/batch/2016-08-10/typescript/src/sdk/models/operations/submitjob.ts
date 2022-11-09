import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitJobHeaders extends SpeakeasyBase {
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


// SubmitJobRequestBodyArrayProperties
/** 
 * An object representing an Batch array job.
**/
export class SubmitJobRequestBodyArrayProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;
}


// SubmitJobRequestBodyContainerOverrides
/** 
 * The overrides that should be sent to a container.
**/
export class SubmitJobRequestBodyContainerOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: shared.KeyValuePair[];

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: shared.ResourceRequirement[];

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}


// SubmitJobRequestBodyNodeOverrides
/** 
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
**/
export class SubmitJobRequestBodyNodeOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodePropertyOverrides", elemType: shared.NodePropertyOverride })
  nodePropertyOverrides?: shared.NodePropertyOverride[];

  @Metadata({ data: "json, name=numNodes" })
  numNodes?: number;
}


// SubmitJobRequestBodyRetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class SubmitJobRequestBodyRetryStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts" })
  attempts?: number;

  @Metadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit })
  evaluateOnExit?: shared.EvaluateOnExit[];
}


// SubmitJobRequestBodyTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class SubmitJobRequestBodyTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}


export class SubmitJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayProperties" })
  arrayProperties?: SubmitJobRequestBodyArrayProperties;

  @Metadata({ data: "json, name=containerOverrides" })
  containerOverrides?: SubmitJobRequestBodyContainerOverrides;

  @Metadata({ data: "json, name=dependsOn", elemType: shared.JobDependency })
  dependsOn?: shared.JobDependency[];

  @Metadata({ data: "json, name=jobDefinition" })
  jobDefinition: string;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @Metadata({ data: "json, name=nodeOverrides" })
  nodeOverrides?: SubmitJobRequestBodyNodeOverrides;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @Metadata({ data: "json, name=retryStrategy" })
  retryStrategy?: SubmitJobRequestBodyRetryStrategy;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=timeout" })
  timeout?: SubmitJobRequestBodyTimeout;
}


export class SubmitJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubmitJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SubmitJobRequestBody;
}


export class SubmitJobResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitJobResponse?: shared.SubmitJobResponse;
}
