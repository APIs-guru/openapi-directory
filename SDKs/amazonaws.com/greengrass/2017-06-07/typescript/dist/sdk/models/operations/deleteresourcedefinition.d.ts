import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteResourceDefinitionPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
}
export declare class DeleteResourceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourceDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteResourceDefinitionPathParams;
    headers: DeleteResourceDefinitionHeaders;
}
export declare class DeleteResourceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteResourceDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
