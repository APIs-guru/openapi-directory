import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueprintRun } from "./blueprintrun";



export class GetBlueprintRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintRun" })
  blueprintRun?: BlueprintRun;
}
