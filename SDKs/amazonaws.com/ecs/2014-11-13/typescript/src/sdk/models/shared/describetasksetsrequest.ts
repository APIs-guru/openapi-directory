import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskSetFieldEnum } from "./tasksetfieldenum";


export class DescribeTaskSetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=include" })
  include?: TaskSetFieldEnum[];

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=taskSets" })
  taskSets?: string[];
}
