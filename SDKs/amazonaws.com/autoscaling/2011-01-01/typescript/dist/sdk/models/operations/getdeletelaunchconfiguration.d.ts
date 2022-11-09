import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLaunchConfigurationActionEnum {
    DeleteLaunchConfiguration = "DeleteLaunchConfiguration"
}
export declare enum GetDeleteLaunchConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteLaunchConfigurationQueryParams extends SpeakeasyBase {
    action: GetDeleteLaunchConfigurationActionEnum;
    launchConfigurationName: string;
    version: GetDeleteLaunchConfigurationVersionEnum;
}
export declare class GetDeleteLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLaunchConfigurationRequest extends SpeakeasyBase {
    queryParams: GetDeleteLaunchConfigurationQueryParams;
    headers: GetDeleteLaunchConfigurationHeaders;
}
export declare class GetDeleteLaunchConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
