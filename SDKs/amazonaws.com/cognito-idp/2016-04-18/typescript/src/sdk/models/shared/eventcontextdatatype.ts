import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventContextDataType
/** 
 * Specifies the user context data captured at the time of an event request.
**/
export class EventContextDataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
