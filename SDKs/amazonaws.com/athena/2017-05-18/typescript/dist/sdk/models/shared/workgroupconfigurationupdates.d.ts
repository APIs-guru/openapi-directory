import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfigurationUpdates } from "./resultconfigurationupdates";
/**
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
**/
export declare class WorkGroupConfigurationUpdates extends SpeakeasyBase {
    bytesScannedCutoffPerQuery?: number;
    enforceWorkGroupConfiguration?: boolean;
    engineVersion?: EngineVersion;
    publishCloudWatchMetricsEnabled?: boolean;
    removeBytesScannedCutoffPerQuery?: boolean;
    requesterPaysEnabled?: boolean;
    resultConfigurationUpdates?: ResultConfigurationUpdates;
}
