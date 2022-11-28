import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceFieldEnum } from "./containerinstancefieldenum";



export class DescribeContainerInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: ContainerInstanceFieldEnum[];
}
