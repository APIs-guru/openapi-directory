import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTaskDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=taskDefinitionArns" })
  taskDefinitionArns?: string[];
}
