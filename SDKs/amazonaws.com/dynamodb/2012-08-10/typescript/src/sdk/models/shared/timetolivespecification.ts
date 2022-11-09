import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeToLiveSpecification
/** 
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
**/
export class TimeToLiveSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled: boolean;
}
