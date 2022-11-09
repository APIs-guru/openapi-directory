import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationConfig
/** 
 * The destination configuration.
**/
export class DestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=services" })
  services: string[];

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
