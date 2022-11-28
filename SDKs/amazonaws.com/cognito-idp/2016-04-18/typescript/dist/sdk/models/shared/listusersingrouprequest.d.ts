import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListUsersInGroupRequest extends SpeakeasyBase {
    groupName: string;
    limit?: number;
    nextToken?: string;
    userPoolId: string;
}
