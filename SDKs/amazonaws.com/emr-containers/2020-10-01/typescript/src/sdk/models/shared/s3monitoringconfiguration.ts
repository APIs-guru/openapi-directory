import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3MonitoringConfiguration
/** 
 *  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
**/
export class S3MonitoringConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=logUri" })
  logUri: string;
}
