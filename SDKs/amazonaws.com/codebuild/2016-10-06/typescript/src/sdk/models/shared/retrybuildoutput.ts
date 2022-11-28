import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



export class RetryBuildOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: Build;
}
