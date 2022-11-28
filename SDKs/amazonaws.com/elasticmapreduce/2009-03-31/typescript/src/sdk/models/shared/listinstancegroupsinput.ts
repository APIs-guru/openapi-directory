import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListInstanceGroupsInput
/** 
 * This input determines which instance groups to retrieve.
**/
export class ListInstanceGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
