import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a Delta Sync configuration.
**/
export declare class DeltaSyncConfig extends SpeakeasyBase {
    baseTableTtl?: number;
    deltaSyncTableName?: string;
    deltaSyncTableTtl?: number;
}
