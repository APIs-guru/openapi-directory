import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstance } from "./containerinstance";
import { Failure } from "./failure";



export class DescribeContainerInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerInstances", elemType: ContainerInstance })
  containerInstances?: ContainerInstance[];

  @SpeakeasyMetadata({ data: "json, name=failures", elemType: Failure })
  failures?: Failure[];
}
