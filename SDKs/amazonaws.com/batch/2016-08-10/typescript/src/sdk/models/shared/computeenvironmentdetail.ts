import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeResource } from "./computeresource";
import { CeStateEnum } from "./cestateenum";
import { CeStatusEnum } from "./cestatusenum";
import { CeTypeEnum } from "./cetypeenum";



// ComputeEnvironmentDetail
/** 
 * An object representing an Batch compute environment.
**/
export class ComputeEnvironmentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentArn" })
  computeEnvironmentArn: string;

  @SpeakeasyMetadata({ data: "json, name=computeEnvironmentName" })
  computeEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=computeResources" })
  computeResources?: ComputeResource;

  @SpeakeasyMetadata({ data: "json, name=ecsClusterArn" })
  ecsClusterArn: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CeTypeEnum;
}
