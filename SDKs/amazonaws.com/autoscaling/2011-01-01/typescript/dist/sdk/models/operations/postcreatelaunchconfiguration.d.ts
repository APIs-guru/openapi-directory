import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateLaunchConfigurationActionEnum {
    CreateLaunchConfiguration = "CreateLaunchConfiguration"
}
export declare enum PostCreateLaunchConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostCreateLaunchConfigurationQueryParams extends SpeakeasyBase {
    action: PostCreateLaunchConfigurationActionEnum;
    version: PostCreateLaunchConfigurationVersionEnum;
}
export declare class PostCreateLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLaunchConfigurationRequest extends SpeakeasyBase {
    queryParams: PostCreateLaunchConfigurationQueryParams;
    headers: PostCreateLaunchConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLaunchConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
