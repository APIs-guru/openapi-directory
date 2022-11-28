import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSuiteDefinitionPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
}
export declare class DeleteSuiteDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSuiteDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteSuiteDefinitionPathParams;
    headers: DeleteSuiteDefinitionHeaders;
}
export declare class DeleteSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    deleteSuiteDefinitionResponse?: Map<string, any>;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
