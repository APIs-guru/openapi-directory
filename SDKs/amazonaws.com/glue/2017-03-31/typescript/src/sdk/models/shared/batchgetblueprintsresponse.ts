import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Blueprint } from "./blueprint";


export class BatchGetBlueprintsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blueprints", elemType: shared.Blueprint })
  blueprints?: Blueprint[];

  @Metadata({ data: "json, name=MissingBlueprints" })
  missingBlueprints?: string[];
}
