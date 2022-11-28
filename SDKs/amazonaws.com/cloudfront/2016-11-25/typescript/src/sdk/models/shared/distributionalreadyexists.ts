import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DistributionAlreadyExists
/** 
 * The caller reference you attempted to create the distribution with is associated with another distribution.
**/
export class DistributionAlreadyExists extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
