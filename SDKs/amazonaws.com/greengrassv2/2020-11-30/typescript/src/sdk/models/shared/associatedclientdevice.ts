import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssociatedClientDevice
/** 
 * Contains information about a client device that is associated to a core device for cloud discovery.
**/
export class AssociatedClientDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=associationTimestamp" })
  associationTimestamp?: Date;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
