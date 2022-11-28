import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an application revision.
**/
export declare class GenericRevisionInfo extends SpeakeasyBase {
    deploymentGroups?: string[];
    description?: string;
    firstUsedTime?: Date;
    lastUsedTime?: Date;
    registerTime?: Date;
}
