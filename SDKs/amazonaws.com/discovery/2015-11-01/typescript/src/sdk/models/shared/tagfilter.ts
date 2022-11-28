import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
