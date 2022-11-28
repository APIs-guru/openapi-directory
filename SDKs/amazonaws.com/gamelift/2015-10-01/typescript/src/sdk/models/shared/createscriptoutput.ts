import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Script } from "./script";



export class CreateScriptOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Script" })
  script?: Script;
}
