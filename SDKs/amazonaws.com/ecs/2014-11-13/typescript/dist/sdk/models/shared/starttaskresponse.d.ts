import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { Task } from "./task";
export declare class StartTaskResponse extends SpeakeasyBase {
    failures?: Failure[];
    tasks?: Task[];
}
