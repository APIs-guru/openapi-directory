import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceEvent
/** 
 * Details on an event associated with a service.
**/
export class ServiceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
