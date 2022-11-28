import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetStoredQueryXAmzTargetEnum {
    StarlingDoveServiceGetStoredQuery = "StarlingDoveService.GetStoredQuery"
}
export declare class GetStoredQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStoredQueryXAmzTargetEnum;
}
export declare class GetStoredQueryRequest extends SpeakeasyBase {
    headers: GetStoredQueryHeaders;
    request: shared.GetStoredQueryRequest;
}
export declare class GetStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    getStoredQueryResponse?: shared.GetStoredQueryResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
