import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateLogPattern = "EC2WindowsBarleyService.CreateLogPattern"
}
export declare class CreateLogPatternHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogPatternXAmzTargetEnum;
}
export declare class CreateLogPatternRequest extends SpeakeasyBase {
    headers: CreateLogPatternHeaders;
    request: shared.CreateLogPatternRequest;
}
export declare class CreateLogPatternResponse extends SpeakeasyBase {
    contentType: string;
    createLogPatternResponse?: shared.CreateLogPatternResponse;
    internalServerException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
