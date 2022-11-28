import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Queue
/** 
 * Describes a queue.
**/
export class Queue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  url?: string;
}
