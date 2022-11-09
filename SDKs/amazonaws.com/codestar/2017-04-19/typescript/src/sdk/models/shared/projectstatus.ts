import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectStatus
/** 
 * An indication of whether a project creation or deletion is failed or successful.
**/
export class ProjectStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=state" })
  state: string;
}
