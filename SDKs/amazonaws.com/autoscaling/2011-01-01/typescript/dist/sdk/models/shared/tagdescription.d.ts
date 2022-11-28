import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag for an Auto Scaling group.
**/
export declare class TagDescription extends SpeakeasyBase {
    key?: string;
    propagateAtLaunch?: boolean;
    resourceId?: string;
    resourceType?: string;
    value?: string;
}
