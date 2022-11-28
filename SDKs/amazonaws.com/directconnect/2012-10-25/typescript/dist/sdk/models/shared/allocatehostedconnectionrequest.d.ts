import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class AllocateHostedConnectionRequest extends SpeakeasyBase {
    bandwidth: string;
    connectionId: string;
    connectionName: string;
    ownerAccount: string;
    tags?: Tag[];
    vlan: number;
}
