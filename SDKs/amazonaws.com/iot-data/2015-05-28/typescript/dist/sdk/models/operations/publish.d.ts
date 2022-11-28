import { SpeakeasyBase } from "../../../internal/utils";
export declare class PublishPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PublishQueryParams extends SpeakeasyBase {
    qos?: number;
    retain?: boolean;
}
export declare class PublishHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PublishRequestBody extends SpeakeasyBase {
    payload?: string;
}
export declare class PublishRequest extends SpeakeasyBase {
    pathParams: PublishPathParams;
    queryParams: PublishQueryParams;
    headers: PublishHeaders;
    request: PublishRequestBody;
}
export declare class PublishResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
