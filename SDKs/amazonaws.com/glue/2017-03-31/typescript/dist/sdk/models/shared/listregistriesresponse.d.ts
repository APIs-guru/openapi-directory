import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryListItem } from "./registrylistitem";
export declare class ListRegistriesResponse extends SpeakeasyBase {
    nextToken?: string;
    registries?: RegistryListItem[];
}
