import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultipleRegionsException
/** 
 * Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
**/
export class MultipleRegionsException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
