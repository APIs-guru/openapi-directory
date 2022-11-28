import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadJobPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReadJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReadJobRequest extends SpeakeasyBase {
    pathParams: ReadJobPathParams;
    headers: ReadJobHeaders;
}
export declare class ReadJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    readJobResponse?: shared.ReadJobResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
