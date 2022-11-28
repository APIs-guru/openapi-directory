import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBlueprintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blueprints" })
  blueprints?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
