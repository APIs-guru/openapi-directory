import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    fleetName: string;
    limit?: number;
    nextToken?: string;
    stackName: string;
    userId?: string;
}
