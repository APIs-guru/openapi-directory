import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaConflictHandlerConfig
/** 
 * The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
**/
export class LambdaConflictHandlerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaConflictHandlerArn" })
  lambdaConflictHandlerArn?: string;
}
