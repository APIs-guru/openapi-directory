import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeLdapsSettingsXAmzTargetEnum {
    DirectoryService20150416DescribeLdapsSettings = "DirectoryService_20150416.DescribeLDAPSSettings"
}
export declare class DescribeLdapsSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLdapsSettingsXAmzTargetEnum;
}
export declare class DescribeLdapsSettingsRequest extends SpeakeasyBase {
    headers: DescribeLdapsSettingsHeaders;
    request: shared.DescribeLdapsSettingsRequest;
}
export declare class DescribeLdapsSettingsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeLdapsSettingsResult?: shared.DescribeLdapsSettingsResult;
    directoryDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
