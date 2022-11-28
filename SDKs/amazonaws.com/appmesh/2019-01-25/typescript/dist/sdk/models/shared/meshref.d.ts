import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a service mesh returned by a list operation.
**/
export declare class MeshRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
}
