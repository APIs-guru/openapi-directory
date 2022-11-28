import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents metadata for a resource.
**/
export declare class ResourceMetadata extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshOwner: string;
    resourceOwner: string;
    uid: string;
    version: number;
}
