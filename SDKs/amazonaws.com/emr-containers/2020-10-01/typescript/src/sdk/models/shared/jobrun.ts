import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { JobDriver } from "./jobdriver";
import { JobRunStateEnum } from "./jobrunstateenum";


// JobRun
/** 
 * This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. 
**/
export class JobRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: ConfigurationOverrides;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: FailureReasonEnum;

  @Metadata({ data: "json, name=finishedAt" })
  finishedAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobDriver" })
  jobDriver?: JobDriver;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseLabel" })
  releaseLabel?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobRunStateEnum;

  @Metadata({ data: "json, name=stateDetails" })
  stateDetails?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
