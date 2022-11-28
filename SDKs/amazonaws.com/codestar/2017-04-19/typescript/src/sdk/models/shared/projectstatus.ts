import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectStatus
/** 
 * An indication of whether a project creation or deletion is failed or successful.
**/
export class ProjectStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;
}
