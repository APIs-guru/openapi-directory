import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchDevicesFilter
/** 
 * The filter to use for searching devices.
**/
export class SearchDevicesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
