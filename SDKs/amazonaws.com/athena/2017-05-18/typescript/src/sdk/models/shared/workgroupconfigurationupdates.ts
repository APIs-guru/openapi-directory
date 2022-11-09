import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfigurationUpdates } from "./resultconfigurationupdates";


// WorkGroupConfigurationUpdates
/** 
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
**/
export class WorkGroupConfigurationUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=BytesScannedCutoffPerQuery" })
  bytesScannedCutoffPerQuery?: number;

  @Metadata({ data: "json, name=EnforceWorkGroupConfiguration" })
  enforceWorkGroupConfiguration?: boolean;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @Metadata({ data: "json, name=PublishCloudWatchMetricsEnabled" })
  publishCloudWatchMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=RemoveBytesScannedCutoffPerQuery" })
  removeBytesScannedCutoffPerQuery?: boolean;

  @Metadata({ data: "json, name=RequesterPaysEnabled" })
  requesterPaysEnabled?: boolean;

  @Metadata({ data: "json, name=ResultConfigurationUpdates" })
  resultConfigurationUpdates?: ResultConfigurationUpdates;
}
