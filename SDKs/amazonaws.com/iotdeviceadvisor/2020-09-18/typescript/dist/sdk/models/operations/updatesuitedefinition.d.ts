import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateSuiteDefinitionPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
}
export declare class UpdateSuiteDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Gets Suite Definition Configuration.
**/
export declare class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn?: string;
    devices?: shared.DeviceUnderTest[];
    intendedForQualification?: boolean;
    rootGroup?: string;
    suiteDefinitionName?: string;
}
export declare class UpdateSuiteDefinitionRequestBody extends SpeakeasyBase {
    suiteDefinitionConfiguration?: UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
}
export declare class UpdateSuiteDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateSuiteDefinitionPathParams;
    headers: UpdateSuiteDefinitionHeaders;
    request: UpdateSuiteDefinitionRequestBody;
}
export declare class UpdateSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    updateSuiteDefinitionResponse?: shared.UpdateSuiteDefinitionResponse;
    validationException?: any;
}
