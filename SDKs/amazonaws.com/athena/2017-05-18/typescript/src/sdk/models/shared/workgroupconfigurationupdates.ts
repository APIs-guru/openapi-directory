import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfigurationUpdates } from "./resultconfigurationupdates";



// WorkGroupConfigurationUpdates
/** 
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
**/
export class WorkGroupConfigurationUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BytesScannedCutoffPerQuery" })
  bytesScannedCutoffPerQuery?: number;

  @SpeakeasyMetadata({ data: "json, name=EnforceWorkGroupConfiguration" })
  enforceWorkGroupConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @SpeakeasyMetadata({ data: "json, name=PublishCloudWatchMetricsEnabled" })
  publishCloudWatchMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoveBytesScannedCutoffPerQuery" })
  removeBytesScannedCutoffPerQuery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequesterPaysEnabled" })
  requesterPaysEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResultConfigurationUpdates" })
  resultConfigurationUpdates?: ResultConfigurationUpdates;
}
