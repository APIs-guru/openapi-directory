import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";
/**
 * Specifies a rule for copying shared snapshots across Regions.
**/
export declare class CrossRegionCopyAction extends SpeakeasyBase {
    encryptionConfiguration: EncryptionConfiguration;
    retainRule?: CrossRegionCopyRetainRule;
    target: string;
}
