import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSetFieldEnum } from "./tasksetfieldenum";



export class DescribeTaskSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: TaskSetFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=taskSets" })
  taskSets?: string[];
}
