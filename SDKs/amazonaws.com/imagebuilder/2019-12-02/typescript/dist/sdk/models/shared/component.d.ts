import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentParameterDetail } from "./componentparameterdetail";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * A detailed view of a component.
**/
export declare class Component extends SpeakeasyBase {
    arn?: string;
    changeDescription?: string;
    data?: string;
    dateCreated?: string;
    description?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    name?: string;
    owner?: string;
    parameters?: ComponentParameterDetail[];
    platform?: PlatformEnum;
    supportedOsVersions?: string[];
    tags?: Map<string, string>;
    type?: ComponentTypeEnum;
    version?: string;
}
