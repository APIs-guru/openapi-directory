import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentLatestVersion } from "./componentlatestversion";
/**
 * Contains information about a component.
**/
export declare class Component extends SpeakeasyBase {
    arn?: string;
    componentName?: string;
    latestVersion?: ComponentLatestVersion;
}
