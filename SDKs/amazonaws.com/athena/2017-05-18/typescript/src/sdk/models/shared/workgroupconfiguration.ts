import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineVersion } from "./engineversion";
import { ResultConfiguration } from "./resultconfiguration";


// WorkGroupConfiguration
/** 
 * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
**/
export class WorkGroupConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BytesScannedCutoffPerQuery" })
  bytesScannedCutoffPerQuery?: number;

  @Metadata({ data: "json, name=EnforceWorkGroupConfiguration" })
  enforceWorkGroupConfiguration?: boolean;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @Metadata({ data: "json, name=PublishCloudWatchMetricsEnabled" })
  publishCloudWatchMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=RequesterPaysEnabled" })
  requesterPaysEnabled?: boolean;

  @Metadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;
}
