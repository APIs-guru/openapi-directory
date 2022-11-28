import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitJobHeaders extends SpeakeasyBase {
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


// SubmitJobRequestBodyArrayProperties
/** 
 * An object representing an Batch array job.
**/
export class SubmitJobRequestBodyArrayProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


// SubmitJobRequestBodyContainerOverrides
/** 
 * The overrides that should be sent to a container.
**/
export class SubmitJobRequestBodyContainerOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: shared.KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: shared.ResourceRequirement[];

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}


// SubmitJobRequestBodyNodeOverrides
/** 
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
**/
export class SubmitJobRequestBodyNodeOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodePropertyOverrides", elemType: shared.NodePropertyOverride })
  nodePropertyOverrides?: shared.NodePropertyOverride[];

  @SpeakeasyMetadata({ data: "json, name=numNodes" })
  numNodes?: number;
}


// SubmitJobRequestBodyRetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class SubmitJobRequestBodyRetryStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts" })
  attempts?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit })
  evaluateOnExit?: shared.EvaluateOnExit[];
}


// SubmitJobRequestBodyTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class SubmitJobRequestBodyTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}


export class SubmitJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayProperties" })
  arrayProperties?: SubmitJobRequestBodyArrayProperties;

  @SpeakeasyMetadata({ data: "json, name=containerOverrides" })
  containerOverrides?: SubmitJobRequestBodyContainerOverrides;

  @SpeakeasyMetadata({ data: "json, name=dependsOn", elemType: shared.JobDependency })
  dependsOn?: shared.JobDependency[];

  @SpeakeasyMetadata({ data: "json, name=jobDefinition" })
  jobDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @SpeakeasyMetadata({ data: "json, name=nodeOverrides" })
  nodeOverrides?: SubmitJobRequestBodyNodeOverrides;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: SubmitJobRequestBodyRetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: SubmitJobRequestBodyTimeout;
}


export class SubmitJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SubmitJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SubmitJobRequestBody;
}


export class SubmitJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitJobResponse?: shared.SubmitJobResponse;
}
