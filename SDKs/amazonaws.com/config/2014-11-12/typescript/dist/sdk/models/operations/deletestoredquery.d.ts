import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStoredQueryXAmzTargetEnum {
    StarlingDoveServiceDeleteStoredQuery = "StarlingDoveService.DeleteStoredQuery"
}
export declare class DeleteStoredQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStoredQueryXAmzTargetEnum;
}
export declare class DeleteStoredQueryRequest extends SpeakeasyBase {
    headers: DeleteStoredQueryHeaders;
    request: shared.DeleteStoredQueryRequest;
}
export declare class DeleteStoredQueryResponse extends SpeakeasyBase {
    contentType: string;
    deleteStoredQueryResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
