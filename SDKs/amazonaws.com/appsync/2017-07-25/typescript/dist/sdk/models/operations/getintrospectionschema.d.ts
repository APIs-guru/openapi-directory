import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIntrospectionSchemaPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare enum GetIntrospectionSchemaFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class GetIntrospectionSchemaQueryParams extends SpeakeasyBase {
    format: GetIntrospectionSchemaFormatEnum;
    includeDirectives?: boolean;
}
export declare class GetIntrospectionSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntrospectionSchemaRequest extends SpeakeasyBase {
    pathParams: GetIntrospectionSchemaPathParams;
    queryParams: GetIntrospectionSchemaQueryParams;
    headers: GetIntrospectionSchemaHeaders;
}
export declare class GetIntrospectionSchemaResponse extends SpeakeasyBase {
    contentType: string;
    getIntrospectionSchemaResponse?: shared.GetIntrospectionSchemaResponse;
    graphQlSchemaException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
