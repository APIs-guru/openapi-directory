import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskDefinitionFieldEnum } from "./taskdefinitionfieldenum";


export class DescribeTaskDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=include" })
  include?: TaskDefinitionFieldEnum[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
