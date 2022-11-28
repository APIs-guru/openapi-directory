import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssociateTargetsWithJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class AssociateTargetsWithJobQueryParams extends SpeakeasyBase {
    namespaceId?: string;
}
export declare class AssociateTargetsWithJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateTargetsWithJobRequestBody extends SpeakeasyBase {
    comment?: string;
    targets: string[];
}
export declare class AssociateTargetsWithJobRequest extends SpeakeasyBase {
    pathParams: AssociateTargetsWithJobPathParams;
    queryParams: AssociateTargetsWithJobQueryParams;
    headers: AssociateTargetsWithJobHeaders;
    request: AssociateTargetsWithJobRequestBody;
}
export declare class AssociateTargetsWithJobResponse extends SpeakeasyBase {
    associateTargetsWithJobResponse?: shared.AssociateTargetsWithJobResponse;
    contentType: string;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
