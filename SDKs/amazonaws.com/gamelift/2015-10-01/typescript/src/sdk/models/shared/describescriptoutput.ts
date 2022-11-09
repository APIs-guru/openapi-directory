import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Script } from "./script";


export class DescribeScriptOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Script" })
  script?: Script;
}
