import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdminListUserAuthEventsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    userPoolId: string;
    username: string;
}
