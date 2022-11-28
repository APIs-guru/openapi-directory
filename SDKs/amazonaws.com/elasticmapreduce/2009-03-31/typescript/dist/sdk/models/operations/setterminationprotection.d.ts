import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetTerminationProtectionXAmzTargetEnum {
    ElasticMapReduceSetTerminationProtection = "ElasticMapReduce.SetTerminationProtection"
}
export declare class SetTerminationProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTerminationProtectionXAmzTargetEnum;
}
export declare class SetTerminationProtectionRequest extends SpeakeasyBase {
    headers: SetTerminationProtectionHeaders;
    request: shared.SetTerminationProtectionInput;
}
export declare class SetTerminationProtectionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
