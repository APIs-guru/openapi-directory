import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerInstanceFieldEnum } from "./containerinstancefieldenum";


export class DescribeContainerInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstances" })
  containerInstances: string[];

  @Metadata({ data: "json, name=include" })
  include?: ContainerInstanceFieldEnum[];
}
