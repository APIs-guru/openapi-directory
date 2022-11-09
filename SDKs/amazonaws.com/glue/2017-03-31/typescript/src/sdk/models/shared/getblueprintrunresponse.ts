import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlueprintRun } from "./blueprintrun";


export class GetBlueprintRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintRun" })
  blueprintRun?: BlueprintRun;
}
