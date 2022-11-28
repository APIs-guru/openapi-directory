import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * A high-level summary of a component.
**/
export declare class ComponentSummary extends SpeakeasyBase {
    arn?: string;
    changeDescription?: string;
    dateCreated?: string;
    description?: string;
    name?: string;
    owner?: string;
    platform?: PlatformEnum;
    supportedOsVersions?: string[];
    tags?: Map<string, string>;
    type?: ComponentTypeEnum;
    version?: string;
}
