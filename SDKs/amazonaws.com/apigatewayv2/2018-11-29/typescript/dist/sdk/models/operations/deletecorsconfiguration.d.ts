import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCorsConfigurationPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteCorsConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCorsConfigurationRequest extends SpeakeasyBase {
    pathParams: DeleteCorsConfigurationPathParams;
    headers: DeleteCorsConfigurationHeaders;
}
export declare class DeleteCorsConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
