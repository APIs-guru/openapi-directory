import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetentionConfiguration
/** 
 * An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
**/
export class RetentionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RetentionPeriodInDays" })
  retentionPeriodInDays: number;
}
