import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceGroup } from "./instancegroup";


// ListInstanceGroupsOutput
/** 
 * This input determines which instance groups to retrieve.
**/
export class ListInstanceGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceGroups", elemType: shared.InstanceGroup })
  instanceGroups?: InstanceGroup[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
