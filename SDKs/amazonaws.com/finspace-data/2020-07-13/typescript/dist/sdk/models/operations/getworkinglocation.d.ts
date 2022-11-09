import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkingLocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetWorkingLocationRequestBodyLocationTypeEnum {
    Ingestion = "INGESTION",
    Sagemaker = "SAGEMAKER"
}
export declare class GetWorkingLocationRequestBody extends SpeakeasyBase {
    locationType?: GetWorkingLocationRequestBodyLocationTypeEnum;
}
export declare class GetWorkingLocationRequest extends SpeakeasyBase {
    headers: GetWorkingLocationHeaders;
    request: GetWorkingLocationRequestBody;
}
export declare class GetWorkingLocationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getWorkingLocationResponse?: shared.GetWorkingLocationResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
