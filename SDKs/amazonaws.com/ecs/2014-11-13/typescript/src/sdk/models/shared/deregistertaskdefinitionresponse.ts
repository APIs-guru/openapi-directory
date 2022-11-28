import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskDefinition } from "./taskdefinition";



export class DeregisterTaskDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: TaskDefinition;
}
