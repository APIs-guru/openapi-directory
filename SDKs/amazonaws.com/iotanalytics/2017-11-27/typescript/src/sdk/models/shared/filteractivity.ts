import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterActivity
/** 
 * An activity that filters a message based on its attributes.
**/
export class FilterActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
