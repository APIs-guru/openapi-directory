import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";



// SnowflakeDestinationProperties
/** 
 *  The properties that are applied when Snowflake is being used as a destination. 
**/
export class SnowflakeDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=intermediateBucketName" })
  intermediateBucketName: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
