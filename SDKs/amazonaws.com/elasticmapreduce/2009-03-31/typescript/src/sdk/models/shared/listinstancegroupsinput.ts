import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListInstanceGroupsInput
/** 
 * This input determines which instance groups to retrieve.
**/
export class ListInstanceGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
