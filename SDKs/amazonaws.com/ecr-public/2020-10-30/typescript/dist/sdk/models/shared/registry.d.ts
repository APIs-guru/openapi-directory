import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryAlias } from "./registryalias";
/**
 * The details of a public registry.
**/
export declare class Registry extends SpeakeasyBase {
    aliases: RegistryAlias[];
    registryArn: string;
    registryId: string;
    registryUri: string;
    verified: boolean;
}
