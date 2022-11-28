import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterActivity
/** 
 * An activity that filters a message based on its attributes.
**/
export class FilterActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
