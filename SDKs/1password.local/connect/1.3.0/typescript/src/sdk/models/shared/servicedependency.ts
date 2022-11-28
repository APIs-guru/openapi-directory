import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceDependency
/** 
 * The state of a registered server dependency.
**/
export class ServiceDependency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
