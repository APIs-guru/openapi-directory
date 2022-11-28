import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a component version that is compatible to run on a Greengrass core device.
**/
export declare class ResolvedComponentVersion extends SpeakeasyBase {
    arn?: string;
    componentName?: string;
    componentVersion?: string;
    recipe?: string;
}
