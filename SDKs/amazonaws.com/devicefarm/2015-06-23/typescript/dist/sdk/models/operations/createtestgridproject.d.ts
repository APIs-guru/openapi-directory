import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623CreateTestGridProject = "DeviceFarm_20150623.CreateTestGridProject"
}
export declare class CreateTestGridProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTestGridProjectXAmzTargetEnum;
}
export declare class CreateTestGridProjectRequest extends SpeakeasyBase {
    headers: CreateTestGridProjectHeaders;
    request: shared.CreateTestGridProjectRequest;
}
export declare class CreateTestGridProjectResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createTestGridProjectResult?: shared.CreateTestGridProjectResult;
    internalServiceException?: any;
    limitExceededException?: any;
    statusCode: number;
}
