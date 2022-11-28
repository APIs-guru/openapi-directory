import { SpeakeasyBase } from "../../../internal/utils";
import { LastActiveDefinition } from "./lastactivedefinition";
import { BlueprintStatusEnum } from "./blueprintstatusenum";
/**
 * The details of a blueprint.
**/
export declare class Blueprint extends SpeakeasyBase {
    blueprintLocation?: string;
    blueprintServiceLocation?: string;
    createdOn?: Date;
    description?: string;
    errorMessage?: string;
    lastActiveDefinition?: LastActiveDefinition;
    lastModifiedOn?: Date;
    name?: string;
    parameterSpec?: string;
    status?: BlueprintStatusEnum;
}
