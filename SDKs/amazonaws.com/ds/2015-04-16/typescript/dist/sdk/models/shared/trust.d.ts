import { SpeakeasyBase } from "../../../internal/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustStateEnum } from "./truststateenum";
import { TrustTypeEnum } from "./trusttypeenum";
/**
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
**/
export declare class Trust extends SpeakeasyBase {
    createdDateTime?: Date;
    directoryId?: string;
    lastUpdatedDateTime?: Date;
    remoteDomainName?: string;
    selectiveAuth?: SelectiveAuthEnum;
    stateLastUpdatedDateTime?: Date;
    trustDirection?: TrustDirectionEnum;
    trustId?: string;
    trustState?: TrustStateEnum;
    trustStateReason?: string;
    trustType?: TrustTypeEnum;
}
