import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskDefinitionFieldEnum } from "./taskdefinitionfieldenum";



export class DescribeTaskDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: TaskDefinitionFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
