import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}
export declare enum PostDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteEnvironmentConfigurationQueryParams extends SpeakeasyBase {
    action: PostDeleteEnvironmentConfigurationActionEnum;
    version: PostDeleteEnvironmentConfigurationVersionEnum;
}
export declare class PostDeleteEnvironmentConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
    queryParams: PostDeleteEnvironmentConfigurationQueryParams;
    headers: PostDeleteEnvironmentConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
