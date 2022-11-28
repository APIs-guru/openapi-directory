import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfiguration } from "./resultconfiguration";
/**
 * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
**/
export declare class WorkGroupConfiguration extends SpeakeasyBase {
    bytesScannedCutoffPerQuery?: number;
    enforceWorkGroupConfiguration?: boolean;
    engineVersion?: EngineVersion;
    publishCloudWatchMetricsEnabled?: boolean;
    requesterPaysEnabled?: boolean;
    resultConfiguration?: ResultConfiguration;
}
