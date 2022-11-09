import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p/>
**/
export declare class ModifyReplicationSubnetGroupMessage extends SpeakeasyBase {
    replicationSubnetGroupDescription?: string;
    replicationSubnetGroupIdentifier: string;
    subnetIds: string[];
}
