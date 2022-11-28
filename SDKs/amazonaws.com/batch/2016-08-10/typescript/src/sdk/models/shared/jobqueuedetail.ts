import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnvironmentOrder } from "./computeenvironmentorder";
import { JqStateEnum } from "./jqstateenum";
import { JqStatusEnum } from "./jqstatusenum";



// JobQueueDetail
/** 
 * An object representing the details of an Batch job queue.
**/
export class JobQueueDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentOrder", elemType: ComputeEnvironmentOrder })
  computeEnvironmentOrder: ComputeEnvironmentOrder[];

  @SpeakeasyMetadata({ data: "json, name=jobQueueArn" })
  jobQueueArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobQueueName" })
  jobQueueName: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: JqStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JqStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
