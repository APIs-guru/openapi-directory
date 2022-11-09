import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";


// CrossRegionCopyAction
/** 
 * Specifies a rule for copying shared snapshots across Regions.
**/
export class CrossRegionCopyAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionConfiguration" })
  encryptionConfiguration: EncryptionConfiguration;

  @Metadata({ data: "json, name=RetainRule" })
  retainRule?: CrossRegionCopyRetainRule;

  @Metadata({ data: "json, name=Target" })
  target: string;
}
