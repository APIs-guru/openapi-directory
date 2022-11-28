import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryStatusEnum } from "./registrystatusenum";
/**
 * A structure containing the details for a registry.
**/
export declare class RegistryListItem extends SpeakeasyBase {
    createdTime?: string;
    description?: string;
    registryArn?: string;
    registryName?: string;
    status?: RegistryStatusEnum;
    updatedTime?: string;
}
