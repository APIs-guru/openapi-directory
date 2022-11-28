import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryId } from "./registryid";
export declare class ListSchemasInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    registryId?: RegistryId;
}
