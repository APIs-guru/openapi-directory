import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilter
/** 
 * The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
