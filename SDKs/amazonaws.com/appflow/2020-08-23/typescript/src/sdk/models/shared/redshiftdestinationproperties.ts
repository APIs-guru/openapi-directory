import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";



// RedshiftDestinationProperties
/** 
 *  The properties that are applied when Amazon Redshift is being used as a destination. 
**/
export class RedshiftDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=intermediateBucketName" })
  intermediateBucketName: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
