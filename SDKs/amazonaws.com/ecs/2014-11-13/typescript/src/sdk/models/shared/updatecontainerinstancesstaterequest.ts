import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";



export class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ContainerInstanceStatusEnum;
}
