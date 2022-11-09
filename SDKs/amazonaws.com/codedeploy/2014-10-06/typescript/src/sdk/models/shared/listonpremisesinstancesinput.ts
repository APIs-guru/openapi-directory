import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { TagFilter } from "./tagfilter";


// ListOnPremisesInstancesInput
/** 
 * Represents the input of a <code>ListOnPremisesInstances</code> operation.
**/
export class ListOnPremisesInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=registrationStatus" })
  registrationStatus?: RegistrationStatusEnum;

  @Metadata({ data: "json, name=tagFilters", elemType: shared.TagFilter })
  tagFilters?: TagFilter[];
}
