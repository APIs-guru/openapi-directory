import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfiguration } from "./resultconfiguration";



// WorkGroupConfiguration
/** 
 * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
**/
export class WorkGroupConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BytesScannedCutoffPerQuery" })
  bytesScannedCutoffPerQuery?: number;

  @SpeakeasyMetadata({ data: "json, name=EnforceWorkGroupConfiguration" })
  enforceWorkGroupConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @SpeakeasyMetadata({ data: "json, name=PublishCloudWatchMetricsEnabled" })
  publishCloudWatchMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequesterPaysEnabled" })
  requesterPaysEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;
}
