import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class ModifyReplicationSubnetGroupMessage extends SpeakeasyBase {
    replicationSubnetGroupDescription?: string;
    replicationSubnetGroupIdentifier: string;
    subnetIds: string[];
}
