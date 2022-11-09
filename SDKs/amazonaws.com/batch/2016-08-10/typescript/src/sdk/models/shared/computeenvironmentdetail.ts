import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeResource } from "./computeresource";
import { CeStateEnum } from "./cestateenum";
import { CeStatusEnum } from "./cestatusenum";
import { CeTypeEnum } from "./cetypeenum";


// ComputeEnvironmentDetail
/** 
 * An object representing an Batch compute environment.
**/
export class ComputeEnvironmentDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironmentArn" })
  computeEnvironmentArn: string;

  @Metadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName: string;

  @Metadata({ data: "json, name=computeResources" })
  computeResources?: ComputeResource;

  @Metadata({ data: "json, name=ecsClusterArn" })
  ecsClusterArn: string;

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=state" })
  state?: CeStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: CeStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: CeTypeEnum;
}
