import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * The defining characteristics of a specific version of an Amazon Web Services TOE component.
**/
export declare class ComponentVersion extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    description?: string;
    name?: string;
    owner?: string;
    platform?: PlatformEnum;
    supportedOsVersions?: string[];
    type?: ComponentTypeEnum;
    version?: string;
}
