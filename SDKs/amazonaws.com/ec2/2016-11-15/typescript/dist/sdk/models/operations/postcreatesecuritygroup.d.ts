import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateSecurityGroupActionEnum {
    CreateSecurityGroup = "CreateSecurityGroup"
}
export declare enum PostCreateSecurityGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostCreateSecurityGroupActionEnum;
    version: PostCreateSecurityGroupVersionEnum;
}
export declare class PostCreateSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateSecurityGroupQueryParams;
    headers: PostCreateSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
