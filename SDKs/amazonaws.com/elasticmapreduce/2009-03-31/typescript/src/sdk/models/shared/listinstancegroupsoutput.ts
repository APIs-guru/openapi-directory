import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroup } from "./instancegroup";



// ListInstanceGroupsOutput
/** 
 * This input determines which instance groups to retrieve.
**/
export class ListInstanceGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroup })
  instanceGroups?: InstanceGroup[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
