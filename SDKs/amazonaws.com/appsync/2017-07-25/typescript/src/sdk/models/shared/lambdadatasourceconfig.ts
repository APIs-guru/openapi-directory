import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaDataSourceConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class LambdaDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn: string;
}
