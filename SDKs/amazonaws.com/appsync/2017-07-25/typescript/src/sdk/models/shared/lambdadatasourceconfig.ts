import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaDataSourceConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class LambdaDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn: string;
}
