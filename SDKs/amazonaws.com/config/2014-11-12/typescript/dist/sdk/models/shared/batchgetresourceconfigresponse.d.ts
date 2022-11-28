import { SpeakeasyBase } from "../../../internal/utils";
import { BaseConfigurationItem } from "./baseconfigurationitem";
import { ResourceKey } from "./resourcekey";
export declare class BatchGetResourceConfigResponse extends SpeakeasyBase {
    baseConfigurationItems?: BaseConfigurationItem[];
    unprocessedResourceKeys?: ResourceKey[];
}
