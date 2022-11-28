import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutConformancePackXAmzTargetEnum {
    StarlingDoveServicePutConformancePack = "StarlingDoveService.PutConformancePack"
}
export declare class PutConformancePackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConformancePackXAmzTargetEnum;
}
export declare class PutConformancePackRequest extends SpeakeasyBase {
    headers: PutConformancePackHeaders;
    request: shared.PutConformancePackRequest;
}
export declare class PutConformancePackResponse extends SpeakeasyBase {
    conformancePackTemplateValidationException?: any;
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    maxNumberOfConformancePacksExceededException?: any;
    putConformancePackResponse?: shared.PutConformancePackResponse;
    resourceInUseException?: any;
    statusCode: number;
}
