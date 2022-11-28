import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a virtual node returned by a list operation.
**/
export declare class VirtualNodeRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
    virtualNodeName: string;
}
