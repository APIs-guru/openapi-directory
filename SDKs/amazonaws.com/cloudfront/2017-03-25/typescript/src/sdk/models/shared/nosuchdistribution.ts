import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NoSuchDistribution
/** 
 * The specified distribution does not exist.
**/
export class NoSuchDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
