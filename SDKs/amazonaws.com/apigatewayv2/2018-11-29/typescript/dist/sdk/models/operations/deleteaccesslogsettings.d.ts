import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAccessLogSettingsPathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class DeleteAccessLogSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAccessLogSettingsRequest extends SpeakeasyBase {
    pathParams: DeleteAccessLogSettingsPathParams;
    headers: DeleteAccessLogSettingsHeaders;
}
export declare class DeleteAccessLogSettingsResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
