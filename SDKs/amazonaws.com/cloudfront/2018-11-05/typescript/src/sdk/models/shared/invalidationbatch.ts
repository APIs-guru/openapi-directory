import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Paths } from "./paths";



// InvalidationBatch
/** 
 * An invalidation batch.
**/
export class InvalidationBatch extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  paths: Paths;
}
