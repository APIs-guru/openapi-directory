import { SpeakeasyBase } from "../../../internal/utils";
import { AuthEventType } from "./autheventtype";
export declare class AdminListUserAuthEventsResponse extends SpeakeasyBase {
    authEvents?: AuthEventType[];
    nextToken?: string;
}
