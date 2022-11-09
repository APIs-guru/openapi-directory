import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p/>
**/
export declare class ModifyReplicationInstanceMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    engineVersion?: string;
    multiAz?: boolean;
    preferredMaintenanceWindow?: string;
    replicationInstanceArn: string;
    replicationInstanceClass?: string;
    replicationInstanceIdentifier?: string;
    vpcSecurityGroupIds?: string[];
}
