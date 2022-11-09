import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";


export class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @Metadata({ data: "json, name=status" })
  status: ContainerInstanceStatusEnum;
}
