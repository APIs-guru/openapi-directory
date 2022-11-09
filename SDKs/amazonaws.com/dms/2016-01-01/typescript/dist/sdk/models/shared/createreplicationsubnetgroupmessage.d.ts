import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * <p/>
**/
export declare class CreateReplicationSubnetGroupMessage extends SpeakeasyBase {
    replicationSubnetGroupDescription: string;
    replicationSubnetGroupIdentifier: string;
    subnetIds: string[];
    tags?: Tag[];
}
