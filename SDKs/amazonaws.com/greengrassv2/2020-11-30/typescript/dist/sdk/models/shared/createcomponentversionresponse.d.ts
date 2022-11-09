import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudComponentStatus } from "./cloudcomponentstatus";
export declare class CreateComponentVersionResponse extends SpeakeasyBase {
    arn?: string;
    componentName: string;
    componentVersion: string;
    creationTimestamp: Date;
    status: CloudComponentStatus;
}
