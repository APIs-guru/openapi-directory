import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterTimeline
/** 
 * Represents the timeline of the cluster's lifecycle.
**/
export class ClusterTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
