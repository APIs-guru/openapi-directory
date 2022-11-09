import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteCoreDefinitionPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
}
export declare class DeleteCoreDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCoreDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteCoreDefinitionPathParams;
    headers: DeleteCoreDefinitionHeaders;
}
export declare class DeleteCoreDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteCoreDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
