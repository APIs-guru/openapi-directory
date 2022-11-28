import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Task } from "./task";
export declare class RunTaskResponse extends SpeakeasyBase {
    failures?: Failure[];
    tasks?: Task[];
}
