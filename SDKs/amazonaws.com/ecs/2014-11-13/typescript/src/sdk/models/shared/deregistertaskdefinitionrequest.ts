import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterTaskDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
