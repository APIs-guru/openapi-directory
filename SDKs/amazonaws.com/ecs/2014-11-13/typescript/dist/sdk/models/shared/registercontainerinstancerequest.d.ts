import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { PlatformDevice } from "./platformdevice";
import { Tag } from "./tag";
import { Resource } from "./resource";
import { VersionInfo } from "./versioninfo";
export declare class RegisterContainerInstanceRequest extends SpeakeasyBase {
    attributes?: Attribute[];
    cluster?: string;
    containerInstanceArn?: string;
    instanceIdentityDocument?: string;
    instanceIdentityDocumentSignature?: string;
    platformDevices?: PlatformDevice[];
    tags?: Tag[];
    totalResources?: Resource[];
    versionInfo?: VersionInfo;
}
