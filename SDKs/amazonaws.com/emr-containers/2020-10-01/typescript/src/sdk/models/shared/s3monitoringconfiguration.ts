import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3MonitoringConfiguration
/** 
 *  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
**/
export class S3MonitoringConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logUri" })
  logUri: string;
}
