import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentTier
/** 
 * Describes the properties of an environment tier
**/
export class EnvironmentTier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  version?: string;
}
