import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RebootReplicationInstanceMessage extends SpeakeasyBase {
    forceFailover?: boolean;
    forcePlannedFailover?: boolean;
    replicationInstanceArn: string;
}
