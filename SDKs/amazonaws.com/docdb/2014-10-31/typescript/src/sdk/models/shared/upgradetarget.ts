import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeTarget
/** 
 * The version of the database engine that an instance can be upgraded to.
**/
export class UpgradeTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoUpgrade?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  isMajorVersionUpgrade?: boolean;
}
