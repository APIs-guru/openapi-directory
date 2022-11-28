import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaExecutorConfiguration
/** 
 * Details about the configuration for the <code>Lambda</code> action engine, or executor.
**/
export class LambdaExecutorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn: string;
}
