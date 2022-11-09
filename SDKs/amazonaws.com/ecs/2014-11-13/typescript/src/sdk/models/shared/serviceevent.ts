import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceEvent
/** 
 * Details on an event associated with a service.
**/
export class ServiceEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
