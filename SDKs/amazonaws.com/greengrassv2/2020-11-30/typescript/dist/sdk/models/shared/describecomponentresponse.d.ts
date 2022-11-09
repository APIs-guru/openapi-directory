import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentPlatform } from "./componentplatform";
import { CloudComponentStatus } from "./cloudcomponentstatus";
export declare class DescribeComponentResponse extends SpeakeasyBase {
    arn?: string;
    componentName?: string;
    componentVersion?: string;
    creationTimestamp?: Date;
    description?: string;
    platforms?: ComponentPlatform[];
    publisher?: string;
    status?: CloudComponentStatus;
    tags?: Map<string, string>;
}
