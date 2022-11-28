import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetentionConfiguration
/** 
 * An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
**/
export class RetentionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodInDays" })
  retentionPeriodInDays: number;
}
