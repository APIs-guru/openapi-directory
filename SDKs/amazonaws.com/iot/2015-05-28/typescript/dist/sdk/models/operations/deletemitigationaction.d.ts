import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMitigationActionPathParams extends SpeakeasyBase {
    actionName: string;
}
export declare class DeleteMitigationActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMitigationActionRequest extends SpeakeasyBase {
    pathParams: DeleteMitigationActionPathParams;
    headers: DeleteMitigationActionHeaders;
}
export declare class DeleteMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    deleteMitigationActionResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
