import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a virtual service returned by a list operation.
**/
export declare class VirtualServiceRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
    virtualServiceName: string;
}
