import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhaseContext
/** 
 * Additional information about a build phase that has an error. You can use this information for troubleshooting.
**/
export class PhaseContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
