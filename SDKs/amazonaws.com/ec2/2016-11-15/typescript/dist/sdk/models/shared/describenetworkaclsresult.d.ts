import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAcl } from "./networkacl";
export declare class DescribeNetworkAclsResult extends SpeakeasyBase {
    networkAcls?: NetworkAcl[];
    nextToken?: string;
}
