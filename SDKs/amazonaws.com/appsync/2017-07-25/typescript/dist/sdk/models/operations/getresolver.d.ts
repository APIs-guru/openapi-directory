import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResolverPathParams extends SpeakeasyBase {
    apiId: string;
    fieldName: string;
    typeName: string;
}
export declare class GetResolverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResolverRequest extends SpeakeasyBase {
    pathParams: GetResolverPathParams;
    headers: GetResolverHeaders;
}
export declare class GetResolverResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    getResolverResponse?: shared.GetResolverResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
