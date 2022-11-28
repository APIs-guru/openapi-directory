import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateGroupRequest extends SpeakeasyBase {
    description?: string;
    groupName: string;
    precedence?: number;
    roleArn?: string;
    userPoolId: string;
}
