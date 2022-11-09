import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSecurityGroupActionEnum {
    DeleteSecurityGroup = "DeleteSecurityGroup"
}
export declare enum PostDeleteSecurityGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteSecurityGroupActionEnum;
    version: PostDeleteSecurityGroupVersionEnum;
}
export declare class PostDeleteSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteSecurityGroupQueryParams;
    headers: PostDeleteSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSecurityGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
