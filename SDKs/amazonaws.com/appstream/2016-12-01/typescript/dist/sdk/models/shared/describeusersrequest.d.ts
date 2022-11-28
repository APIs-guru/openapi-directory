import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class DescribeUsersRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
