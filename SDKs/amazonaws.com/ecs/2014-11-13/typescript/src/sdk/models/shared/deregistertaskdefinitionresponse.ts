import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskDefinition } from "./taskdefinition";


export class DeregisterTaskDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: TaskDefinition;
}
