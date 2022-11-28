import { SpeakeasyBase } from "../../../internal/utils";
import { IkeVersionsListValue } from "./ikeversionslistvalue";
import { Phase1DhGroupNumbersListValue } from "./phase1dhgroupnumberslistvalue";
import { Phase1EncryptionAlgorithmsListValue } from "./phase1encryptionalgorithmslistvalue";
import { Phase1IntegrityAlgorithmsListValue } from "./phase1integrityalgorithmslistvalue";
import { Phase2DhGroupNumbersListValue } from "./phase2dhgroupnumberslistvalue";
import { Phase2EncryptionAlgorithmsListValue } from "./phase2encryptionalgorithmslistvalue";
import { Phase2IntegrityAlgorithmsListValue } from "./phase2integrityalgorithmslistvalue";
/**
 * The VPN tunnel options.
**/
export declare class TunnelOption extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: IkeVersionsListValue[];
    outsideIpAddress?: string;
    phase1DhGroupNumbers?: Phase1DhGroupNumbersListValue[];
    phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];
    phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];
    phase1LifetimeSeconds?: number;
    phase2DhGroupNumbers?: Phase2DhGroupNumbersListValue[];
    phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];
    phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];
    phase2LifetimeSeconds?: number;
    preSharedKey?: string;
    rekeyFuzzPercentage?: number;
    rekeyMarginTimeSeconds?: number;
    replayWindowSize?: number;
    startupAction?: string;
    tunnelInsideCidr?: string;
    tunnelInsideIpv6Cidr?: string;
}
