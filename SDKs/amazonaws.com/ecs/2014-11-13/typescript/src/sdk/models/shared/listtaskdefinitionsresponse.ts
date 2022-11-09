import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTaskDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=taskDefinitionArns" })
  taskDefinitionArns?: string[];
}
