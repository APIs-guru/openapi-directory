import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";
export declare class GetChangeLogsResponse extends SpeakeasyBase {
    changeLogs?: ChangeLog[];
    nextToken?: string;
}
