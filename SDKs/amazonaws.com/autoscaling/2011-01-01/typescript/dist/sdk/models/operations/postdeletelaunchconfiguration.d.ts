import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteLaunchConfigurationActionEnum {
    DeleteLaunchConfiguration = "DeleteLaunchConfiguration"
}
export declare enum PostDeleteLaunchConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDeleteLaunchConfigurationQueryParams extends SpeakeasyBase {
    action: PostDeleteLaunchConfigurationActionEnum;
    version: PostDeleteLaunchConfigurationVersionEnum;
}
export declare class PostDeleteLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLaunchConfigurationRequest extends SpeakeasyBase {
    queryParams: PostDeleteLaunchConfigurationQueryParams;
    headers: PostDeleteLaunchConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLaunchConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
