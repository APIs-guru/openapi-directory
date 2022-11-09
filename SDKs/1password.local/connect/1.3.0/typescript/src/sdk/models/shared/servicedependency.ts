import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceDependency
/** 
 * The state of a registered server dependency.
**/
export class ServiceDependency extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
