import { SpeakeasyBase } from "../../../internal/utils";
export declare class RebootReplicationInstanceMessage extends SpeakeasyBase {
    forceFailover?: boolean;
    forcePlannedFailover?: boolean;
    replicationInstanceArn: string;
}
