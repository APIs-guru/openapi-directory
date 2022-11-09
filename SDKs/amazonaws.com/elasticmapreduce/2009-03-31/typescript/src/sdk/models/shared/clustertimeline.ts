import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterTimeline
/** 
 * Represents the timeline of the cluster's lifecycle.
**/
export class ClusterTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
