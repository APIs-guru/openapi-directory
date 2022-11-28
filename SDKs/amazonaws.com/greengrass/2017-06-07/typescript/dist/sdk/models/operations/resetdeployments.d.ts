import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetDeploymentsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ResetDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class ResetDeploymentsRequestBody extends SpeakeasyBase {
    force?: boolean;
}
export declare class ResetDeploymentsRequest extends SpeakeasyBase {
    pathParams: ResetDeploymentsPathParams;
    headers: ResetDeploymentsHeaders;
    request: ResetDeploymentsRequestBody;
}
export declare class ResetDeploymentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    resetDeploymentsResponse?: shared.ResetDeploymentsResponse;
    statusCode: number;
}
