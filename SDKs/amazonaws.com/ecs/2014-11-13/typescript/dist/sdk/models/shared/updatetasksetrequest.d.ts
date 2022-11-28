import { SpeakeasyBase } from "../../../internal/utils";
import { Scale } from "./scale";
export declare class UpdateTaskSetRequest extends SpeakeasyBase {
    cluster: string;
    scale: Scale;
    service: string;
    taskSet: string;
}
