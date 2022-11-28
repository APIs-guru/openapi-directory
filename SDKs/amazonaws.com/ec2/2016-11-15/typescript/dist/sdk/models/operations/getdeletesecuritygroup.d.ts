import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSecurityGroupActionEnum {
    DeleteSecurityGroup = "DeleteSecurityGroup"
}
export declare enum GetDeleteSecurityGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteSecurityGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteSecurityGroupActionEnum;
    dryRun?: boolean;
    groupId?: string;
    groupName?: string;
    version: GetDeleteSecurityGroupVersionEnum;
}
export declare class GetDeleteSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSecurityGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteSecurityGroupQueryParams;
    headers: GetDeleteSecurityGroupHeaders;
}
export declare class GetDeleteSecurityGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
