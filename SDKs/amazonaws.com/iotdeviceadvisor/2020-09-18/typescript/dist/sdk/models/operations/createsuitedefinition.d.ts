import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSuiteDefinitionHeaders extends SpeakeasyBase {
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
export declare class CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn?: string;
    devices?: shared.DeviceUnderTest[];
    intendedForQualification?: boolean;
    rootGroup?: string;
    suiteDefinitionName?: string;
}
export declare class CreateSuiteDefinitionRequestBody extends SpeakeasyBase {
    suiteDefinitionConfiguration?: CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
    tags?: Map<string, string>;
}
export declare class CreateSuiteDefinitionRequest extends SpeakeasyBase {
    headers: CreateSuiteDefinitionHeaders;
    request: CreateSuiteDefinitionRequestBody;
}
export declare class CreateSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createSuiteDefinitionResponse?: shared.CreateSuiteDefinitionResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
