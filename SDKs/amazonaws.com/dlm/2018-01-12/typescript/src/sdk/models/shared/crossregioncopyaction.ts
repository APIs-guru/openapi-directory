import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";



// CrossRegionCopyAction
/** 
 * Specifies a rule for copying shared snapshots across Regions.
**/
export class CrossRegionCopyAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RetainRule" })
  retainRule?: CrossRegionCopyRetainRule;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: string;
}
