import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum InferIcd10CmxAmzTargetEnum {
    ComprehendMedical20181030InferIcd10Cm = "ComprehendMedical_20181030.InferICD10CM"
}
export declare class InferIcd10CmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InferIcd10CmxAmzTargetEnum;
}
export declare class InferIcd10CmRequest extends SpeakeasyBase {
    headers: InferIcd10CmHeaders;
    request: shared.InferIcd10CmRequest;
}
export declare class InferIcd10CmResponse extends SpeakeasyBase {
    contentType: string;
    inferIcd10CmResponse?: shared.InferIcd10CmResponse;
    internalServerException?: any;
    invalidEncodingException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
}
