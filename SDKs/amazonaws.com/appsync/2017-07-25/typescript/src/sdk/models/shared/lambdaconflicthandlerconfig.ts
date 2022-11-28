import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaConflictHandlerConfig
/** 
 * The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
**/
export class LambdaConflictHandlerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerArn" })
  lambdaConflictHandlerArn?: string;
}
