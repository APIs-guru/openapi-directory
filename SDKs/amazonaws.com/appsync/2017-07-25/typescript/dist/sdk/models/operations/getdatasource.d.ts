import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDataSourcePathParams extends SpeakeasyBase {
    apiId: string;
    name: string;
}
export declare class GetDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDataSourceRequest extends SpeakeasyBase {
    pathParams: GetDataSourcePathParams;
    headers: GetDataSourceHeaders;
}
export declare class GetDataSourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    getDataSourceResponse?: shared.GetDataSourceResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
