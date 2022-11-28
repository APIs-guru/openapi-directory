import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a virtual router returned by a list operation.
**/
export declare class VirtualRouterRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
    virtualRouterName: string;
}
