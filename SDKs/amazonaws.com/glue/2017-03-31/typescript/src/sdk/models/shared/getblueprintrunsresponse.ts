import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueprintRun } from "./blueprintrun";



export class GetBlueprintRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintRuns", elemType: BlueprintRun })
  blueprintRuns?: BlueprintRun[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
