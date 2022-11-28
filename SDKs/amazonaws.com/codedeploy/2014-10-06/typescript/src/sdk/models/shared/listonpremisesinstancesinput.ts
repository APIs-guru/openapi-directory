import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { TagFilter } from "./tagfilter";



// ListOnPremisesInstancesInput
/** 
 * Represents the input of a <code>ListOnPremisesInstances</code> operation.
**/
export class ListOnPremisesInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationStatus" })
  registrationStatus?: RegistrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tagFilters", elemType: TagFilter })
  tagFilters?: TagFilter[];
}
