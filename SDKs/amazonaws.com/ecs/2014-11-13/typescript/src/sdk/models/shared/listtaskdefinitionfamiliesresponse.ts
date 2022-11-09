import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTaskDefinitionFamiliesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=families" })
  families?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
