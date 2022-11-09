import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentPlatform } from "./componentplatform";
/**
 * Contains information about the latest version of a component.
**/
export declare class ComponentLatestVersion extends SpeakeasyBase {
    arn?: string;
    componentVersion?: string;
    creationTimestamp?: Date;
    description?: string;
    platforms?: ComponentPlatform[];
    publisher?: string;
}
