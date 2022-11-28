import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



export class StopBuildOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: Build;
}
