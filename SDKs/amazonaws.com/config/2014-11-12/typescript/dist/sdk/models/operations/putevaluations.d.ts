import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutEvaluationsXAmzTargetEnum {
    StarlingDoveServicePutEvaluations = "StarlingDoveService.PutEvaluations"
}
export declare class PutEvaluationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEvaluationsXAmzTargetEnum;
}
export declare class PutEvaluationsRequest extends SpeakeasyBase {
    headers: PutEvaluationsHeaders;
    request: shared.PutEvaluationsRequest;
}
export declare class PutEvaluationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    invalidResultTokenException?: any;
    noSuchConfigRuleException?: any;
    putEvaluationsResponse?: shared.PutEvaluationsResponse;
    statusCode: number;
}
