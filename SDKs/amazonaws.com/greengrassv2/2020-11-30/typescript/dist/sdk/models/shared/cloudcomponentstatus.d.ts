import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudComponentStateEnum } from "./cloudcomponentstateenum";
/**
 * Contains the status of a component in the IoT Greengrass service.
**/
export declare class CloudComponentStatus extends SpeakeasyBase {
    componentState?: CloudComponentStateEnum;
    errors?: Map<string, string>;
    message?: string;
}
