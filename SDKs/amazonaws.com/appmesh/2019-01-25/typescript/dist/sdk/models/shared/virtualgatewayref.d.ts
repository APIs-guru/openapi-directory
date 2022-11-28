import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a virtual gateway returned by a list operation.
**/
export declare class VirtualGatewayRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    version: number;
    virtualGatewayName: string;
}
