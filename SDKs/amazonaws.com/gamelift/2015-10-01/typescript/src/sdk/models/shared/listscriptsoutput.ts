import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Script } from "./script";



export class ListScriptsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Scripts", elemType: Script })
  scripts?: Script[];
}
