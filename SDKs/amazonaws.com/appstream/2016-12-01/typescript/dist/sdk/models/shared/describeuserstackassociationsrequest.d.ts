import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class DescribeUserStackAssociationsRequest extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    maxResults?: number;
    nextToken?: string;
    stackName?: string;
    userName?: string;
}
