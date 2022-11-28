import { SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PosixUser } from "./posixuser";
import { RootDirectory } from "./rootdirectory";
import { Tag } from "./tag";
/**
 * Provides a description of an EFS file system access point.
**/
export declare class AccessPointDescription extends SpeakeasyBase {
    accessPointArn?: string;
    accessPointId?: string;
    clientToken?: string;
    fileSystemId?: string;
    lifeCycleState?: LifeCycleStateEnum;
    name?: string;
    ownerId?: string;
    posixUser?: PosixUser;
    rootDirectory?: RootDirectory;
    tags?: Tag[];
}
