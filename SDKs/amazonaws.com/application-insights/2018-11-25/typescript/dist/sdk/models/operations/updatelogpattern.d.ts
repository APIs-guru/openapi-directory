import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateLogPattern = "EC2WindowsBarleyService.UpdateLogPattern"
}
export declare class UpdateLogPatternHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLogPatternXAmzTargetEnum;
}
export declare class UpdateLogPatternRequest extends SpeakeasyBase {
    headers: UpdateLogPatternHeaders;
    request: shared.UpdateLogPatternRequest;
}
export declare class UpdateLogPatternResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateLogPatternResponse?: shared.UpdateLogPatternResponse;
    validationException?: any;
}
