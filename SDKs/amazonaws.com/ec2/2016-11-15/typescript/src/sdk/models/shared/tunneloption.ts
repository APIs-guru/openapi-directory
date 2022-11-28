import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IkeVersionsListValue } from "./ikeversionslistvalue";
import { Phase1DhGroupNumbersListValue } from "./phase1dhgroupnumberslistvalue";
import { Phase1EncryptionAlgorithmsListValue } from "./phase1encryptionalgorithmslistvalue";
import { Phase1IntegrityAlgorithmsListValue } from "./phase1integrityalgorithmslistvalue";
import { Phase2DhGroupNumbersListValue } from "./phase2dhgroupnumberslistvalue";
import { Phase2EncryptionAlgorithmsListValue } from "./phase2encryptionalgorithmslistvalue";
import { Phase2IntegrityAlgorithmsListValue } from "./phase2integrityalgorithmslistvalue";



// TunnelOption
/** 
 * The VPN tunnel options.
**/
export class TunnelOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dpdTimeoutAction?: string;

  @SpeakeasyMetadata()
  dpdTimeoutSeconds?: number;

  @SpeakeasyMetadata({ elemType: IkeVersionsListValue })
  ikeVersions?: IkeVersionsListValue[];

  @SpeakeasyMetadata()
  outsideIpAddress?: string;

  @SpeakeasyMetadata({ elemType: Phase1DhGroupNumbersListValue })
  phase1DhGroupNumbers?: Phase1DhGroupNumbersListValue[];

  @SpeakeasyMetadata({ elemType: Phase1EncryptionAlgorithmsListValue })
  phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  @SpeakeasyMetadata({ elemType: Phase1IntegrityAlgorithmsListValue })
  phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  @SpeakeasyMetadata()
  phase1LifetimeSeconds?: number;

  @SpeakeasyMetadata({ elemType: Phase2DhGroupNumbersListValue })
  phase2DhGroupNumbers?: Phase2DhGroupNumbersListValue[];

  @SpeakeasyMetadata({ elemType: Phase2EncryptionAlgorithmsListValue })
  phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  @SpeakeasyMetadata({ elemType: Phase2IntegrityAlgorithmsListValue })
  phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  @SpeakeasyMetadata()
  phase2LifetimeSeconds?: number;

  @SpeakeasyMetadata()
  preSharedKey?: string;

  @SpeakeasyMetadata()
  rekeyFuzzPercentage?: number;

  @SpeakeasyMetadata()
  rekeyMarginTimeSeconds?: number;

  @SpeakeasyMetadata()
  replayWindowSize?: number;

  @SpeakeasyMetadata()
  startupAction?: string;

  @SpeakeasyMetadata()
  tunnelInsideCidr?: string;

  @SpeakeasyMetadata()
  tunnelInsideIpv6Cidr?: string;
}
