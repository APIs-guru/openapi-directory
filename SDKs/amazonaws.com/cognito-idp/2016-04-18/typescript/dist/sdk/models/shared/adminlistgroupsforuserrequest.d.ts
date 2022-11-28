import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdminListGroupsForUserRequest extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
    userPoolId: string;
    username: string;
}
