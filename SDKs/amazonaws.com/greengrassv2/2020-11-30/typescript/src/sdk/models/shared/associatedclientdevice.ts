import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociatedClientDevice
/** 
 * Contains information about a client device that is associated to a core device for cloud discovery.
**/
export class AssociatedClientDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationTimestamp" })
  associationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}
