import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { JobDriver } from "./jobdriver";
import { JobRunStateEnum } from "./jobrunstateenum";



// JobRun
/** 
 * This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. 
**/
export class JobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: ConfigurationOverrides;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: FailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=finishedAt" })
  finishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobDriver" })
  jobDriver?: JobDriver;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseLabel" })
  releaseLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateDetails" })
  stateDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
