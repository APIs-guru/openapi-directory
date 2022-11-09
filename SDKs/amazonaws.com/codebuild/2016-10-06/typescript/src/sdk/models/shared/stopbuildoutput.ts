import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Build } from "./build";


export class StopBuildOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=build" })
  build?: Build;
}
