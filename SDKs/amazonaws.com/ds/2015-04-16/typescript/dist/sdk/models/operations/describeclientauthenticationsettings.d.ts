import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeClientAuthenticationSettingsXAmzTargetEnum {
    DirectoryService20150416DescribeClientAuthenticationSettings = "DirectoryService_20150416.DescribeClientAuthenticationSettings"
}
export declare class DescribeClientAuthenticationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClientAuthenticationSettingsXAmzTargetEnum;
}
export declare class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
    headers: DescribeClientAuthenticationSettingsHeaders;
    request: shared.DescribeClientAuthenticationSettingsRequest;
}
export declare class DescribeClientAuthenticationSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    describeClientAuthenticationSettingsResult?: shared.DescribeClientAuthenticationSettingsResult;
    directoryDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
