import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterTaskDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition: string;
}
