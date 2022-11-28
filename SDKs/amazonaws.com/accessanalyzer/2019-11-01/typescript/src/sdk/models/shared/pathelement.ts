import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Substring } from "./substring";



// PathElement
/** 
 * A single element in a path through the JSON representation of a policy.
**/
export class PathElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=substring" })
  substring?: Substring;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
