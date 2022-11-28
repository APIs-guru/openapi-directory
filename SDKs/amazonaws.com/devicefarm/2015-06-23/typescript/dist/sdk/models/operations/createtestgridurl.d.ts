import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTestGridUrlXAmzTargetEnum {
    DeviceFarm20150623CreateTestGridUrl = "DeviceFarm_20150623.CreateTestGridUrl"
}
export declare class CreateTestGridUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTestGridUrlXAmzTargetEnum;
}
export declare class CreateTestGridUrlRequest extends SpeakeasyBase {
    headers: CreateTestGridUrlHeaders;
    request: shared.CreateTestGridUrlRequest;
}
export declare class CreateTestGridUrlResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createTestGridUrlResult?: shared.CreateTestGridUrlResult;
    internalServiceException?: any;
    notFoundException?: any;
    statusCode: number;
}
