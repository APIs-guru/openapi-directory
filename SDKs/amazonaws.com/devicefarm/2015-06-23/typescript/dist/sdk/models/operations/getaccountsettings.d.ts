import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAccountSettingsXAmzTargetEnum {
    DeviceFarm20150623GetAccountSettings = "DeviceFarm_20150623.GetAccountSettings"
}
export declare class GetAccountSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountSettingsXAmzTargetEnum;
}
export declare class GetAccountSettingsRequest extends SpeakeasyBase {
    headers: GetAccountSettingsHeaders;
    request: Map<string, any>;
}
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getAccountSettingsResult?: shared.GetAccountSettingsResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
