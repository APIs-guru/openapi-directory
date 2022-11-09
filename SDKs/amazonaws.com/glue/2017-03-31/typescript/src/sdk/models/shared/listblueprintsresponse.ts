import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListBlueprintsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blueprints" })
  blueprints?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
