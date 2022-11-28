import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutStoredQueryXAmzTargetEnum {
    StarlingDoveServicePutStoredQuery = "StarlingDoveService.PutStoredQuery"
}
export declare class PutStoredQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutStoredQueryXAmzTargetEnum;
}
export declare class PutStoredQueryRequest extends SpeakeasyBase {
    headers: PutStoredQueryHeaders;
    request: shared.PutStoredQueryRequest;
}
export declare class PutStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    putStoredQueryResponse?: shared.PutStoredQueryResponse;
    resourceConcurrentModificationException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    validationException?: any;
}
