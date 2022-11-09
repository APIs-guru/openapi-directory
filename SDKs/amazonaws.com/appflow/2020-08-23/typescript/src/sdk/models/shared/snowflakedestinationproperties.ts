import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";


// SnowflakeDestinationProperties
/** 
 *  The properties that are applied when Snowflake is being used as a destination. 
**/
export class SnowflakeDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @Metadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @Metadata({ data: "json, name=intermediateBucketName" })
  intermediateBucketName: string;

  @Metadata({ data: "json, name=object" })
  object: string;
}
