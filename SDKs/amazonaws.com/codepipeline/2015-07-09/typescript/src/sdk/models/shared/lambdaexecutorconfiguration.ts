import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaExecutorConfiguration
/** 
 * Details about the configuration for the <code>Lambda</code> action engine, or executor.
**/
export class LambdaExecutorConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn: string;
}
