import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchDevicesFilter
/** 
 * The filter to use for searching devices.
**/
export class SearchDevicesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
