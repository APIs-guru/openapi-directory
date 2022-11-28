import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupRequest extends SpeakeasyBase {
    description?: string;
    groupName: string;
    precedence?: number;
    roleArn?: string;
    userPoolId: string;
}
