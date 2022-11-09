import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Build } from "./build";


export class RetryBuildOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=build" })
  build?: Build;
}
