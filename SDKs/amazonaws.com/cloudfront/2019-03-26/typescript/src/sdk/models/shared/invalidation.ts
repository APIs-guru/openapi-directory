import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvalidationBatch } from "./invalidationbatch";



// Invalidation
/** 
 * An invalidation. 
**/
export class Invalidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime: Date;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  invalidationBatch: InvalidationBatch;

  @SpeakeasyMetadata()
  status: string;
}
