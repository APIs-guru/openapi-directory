import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyDeprecateRule } from "./crossregioncopydeprecaterule";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";



// CrossRegionCopyRule
/** 
 * Specifies a rule for cross-Region snapshot copies.
**/
export class CrossRegionCopyRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CmkArn" })
  cmkArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeprecateRule" })
  deprecateRule?: CrossRegionCopyDeprecateRule;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted: boolean;

  @SpeakeasyMetadata({ data: "json, name=RetainRule" })
  retainRule?: CrossRegionCopyRetainRule;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetRegion" })
  targetRegion?: string;
}
