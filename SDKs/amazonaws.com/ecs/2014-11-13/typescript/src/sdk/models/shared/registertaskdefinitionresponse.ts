import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { TaskDefinition } from "./taskdefinition";


export class RegisterTaskDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: TaskDefinition;
}
