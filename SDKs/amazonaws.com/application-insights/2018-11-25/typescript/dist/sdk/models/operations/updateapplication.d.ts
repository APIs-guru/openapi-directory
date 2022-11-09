import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateApplication = "EC2WindowsBarleyService.UpdateApplication"
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    headers: UpdateApplicationHeaders;
    request: shared.UpdateApplicationRequest;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateApplicationResponse?: shared.UpdateApplicationResponse;
    validationException?: any;
}
