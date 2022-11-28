import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePresetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePresetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePresetRequest extends SpeakeasyBase {
    pathParams: DeletePresetPathParams;
    headers: DeletePresetHeaders;
}
export declare class DeletePresetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deletePresetResponse?: Map<string, any>;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
