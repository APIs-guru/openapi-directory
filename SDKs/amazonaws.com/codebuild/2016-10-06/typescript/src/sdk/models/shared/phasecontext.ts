import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhaseContext
/** 
 * Additional information about a build phase that has an error. You can use this information for troubleshooting.
**/
export class PhaseContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
