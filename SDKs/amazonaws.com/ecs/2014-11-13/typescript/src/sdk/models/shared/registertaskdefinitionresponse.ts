import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TaskDefinition } from "./taskdefinition";



export class RegisterTaskDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: TaskDefinition;
}
