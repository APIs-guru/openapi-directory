import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BulkPublishPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class BulkPublishHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BulkPublishRequest extends SpeakeasyBase {
    pathParams: BulkPublishPathParams;
    headers: BulkPublishHeaders;
}
export declare class BulkPublishResponse extends SpeakeasyBase {
    alreadyStreamedException?: any;
    bulkPublishResponse?: shared.BulkPublishResponse;
    contentType: string;
    duplicateRequestException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
