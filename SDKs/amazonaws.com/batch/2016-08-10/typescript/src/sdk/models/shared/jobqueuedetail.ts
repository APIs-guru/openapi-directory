import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeEnvironmentOrder } from "./computeenvironmentorder";
import { JqStateEnum } from "./jqstateenum";
import { JqStatusEnum } from "./jqstatusenum";


// JobQueueDetail
/** 
 * An object representing the details of an Batch job queue.
**/
export class JobQueueDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentOrder", elemType: shared.ComputeEnvironmentOrder })
  computeEnvironmentOrder: ComputeEnvironmentOrder[];

  @Metadata({ data: "json, name=jobQueueArn" })
  jobQueueArn: string;

  @Metadata({ data: "json, name=jobQueueName" })
  jobQueueName: string;

  @Metadata({ data: "json, name=priority" })
  priority: number;

  @Metadata({ data: "json, name=state" })
  state: JqStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: JqStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
