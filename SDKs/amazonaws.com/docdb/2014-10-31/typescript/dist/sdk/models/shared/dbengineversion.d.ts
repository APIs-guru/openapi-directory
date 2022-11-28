import { SpeakeasyBase } from "../../../internal/utils";
import { UpgradeTarget } from "./upgradetarget";
/**
 *  Detailed information about an engine version.
**/
export declare class DbEngineVersion extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    supportsLogExportsToCloudwatchLogs?: boolean;
    validUpgradeTarget?: UpgradeTarget[];
}
