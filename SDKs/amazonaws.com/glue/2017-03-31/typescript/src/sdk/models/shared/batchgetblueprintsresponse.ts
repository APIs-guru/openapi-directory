import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blueprint } from "./blueprint";



export class BatchGetBlueprintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blueprints", elemType: Blueprint })
  blueprints?: Blueprint[];

  @SpeakeasyMetadata({ data: "json, name=MissingBlueprints" })
  missingBlueprints?: string[];
}
