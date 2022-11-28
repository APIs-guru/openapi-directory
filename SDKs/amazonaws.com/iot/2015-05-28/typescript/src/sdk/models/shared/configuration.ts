import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Configuration
/** 
 * Configuration.
**/
export class Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
