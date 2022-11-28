import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadPresetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ReadPresetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReadPresetRequest extends SpeakeasyBase {
    pathParams: ReadPresetPathParams;
    headers: ReadPresetHeaders;
}
export declare class ReadPresetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    readPresetResponse?: shared.ReadPresetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
