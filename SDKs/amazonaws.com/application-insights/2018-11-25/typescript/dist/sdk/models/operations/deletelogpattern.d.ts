import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceDeleteLogPattern = "EC2WindowsBarleyService.DeleteLogPattern"
}
export declare class DeleteLogPatternHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLogPatternXAmzTargetEnum;
}
export declare class DeleteLogPatternRequest extends SpeakeasyBase {
    headers: DeleteLogPatternHeaders;
    request: shared.DeleteLogPatternRequest;
}
export declare class DeleteLogPatternResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteLogPatternResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
