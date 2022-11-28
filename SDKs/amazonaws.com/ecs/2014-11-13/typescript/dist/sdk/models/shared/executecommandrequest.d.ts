import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExecuteCommandRequest extends SpeakeasyBase {
    cluster?: string;
    command: string;
    container?: string;
    interactive: boolean;
    task: string;
}
