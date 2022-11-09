import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerInstance } from "./containerinstance";
import { Failure } from "./failure";


export class DescribeContainerInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerInstances", elemType: shared.ContainerInstance })
  containerInstances?: ContainerInstance[];

  @Metadata({ data: "json, name=failures", elemType: shared.Failure })
  failures?: Failure[];
}
