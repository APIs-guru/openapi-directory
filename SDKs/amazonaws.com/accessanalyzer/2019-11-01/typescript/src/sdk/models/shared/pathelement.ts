import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Substring } from "./substring";


// PathElement
/** 
 * A single element in a path through the JSON representation of a policy.
**/
export class PathElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=substring" })
  substring?: Substring;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
