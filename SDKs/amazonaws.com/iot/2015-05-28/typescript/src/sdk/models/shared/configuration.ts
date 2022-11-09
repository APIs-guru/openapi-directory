import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Configuration
/** 
 * Configuration.
**/
export class Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
