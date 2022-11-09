import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RawString
/** 
 * A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.
**/
export class RawString extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
