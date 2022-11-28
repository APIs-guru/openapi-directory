import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { TagFilter } from "./tagfilter";
/**
 * Represents the input of a <code>ListOnPremisesInstances</code> operation.
**/
export declare class ListOnPremisesInstancesInput extends SpeakeasyBase {
    nextToken?: string;
    registrationStatus?: RegistrationStatusEnum;
    tagFilters?: TagFilter[];
}
