import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListScriptsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
