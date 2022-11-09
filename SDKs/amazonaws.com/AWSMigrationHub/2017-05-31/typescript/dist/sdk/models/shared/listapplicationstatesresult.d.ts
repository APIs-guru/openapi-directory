import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationState } from "./applicationstate";
export declare class ListApplicationStatesResult extends SpeakeasyBase {
    applicationStateList?: ApplicationState[];
    nextToken?: string;
}
