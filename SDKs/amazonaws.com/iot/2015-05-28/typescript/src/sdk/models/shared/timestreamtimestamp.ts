import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestreamTimestamp
/** 
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
**/
export class TimestreamTimestamp extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
