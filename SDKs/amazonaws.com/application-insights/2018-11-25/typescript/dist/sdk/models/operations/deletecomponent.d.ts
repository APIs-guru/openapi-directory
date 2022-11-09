import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceDeleteComponent = "EC2WindowsBarleyService.DeleteComponent"
}
export declare class DeleteComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteComponentXAmzTargetEnum;
}
export declare class DeleteComponentRequest extends SpeakeasyBase {
    headers: DeleteComponentHeaders;
    request: shared.DeleteComponentRequest;
}
export declare class DeleteComponentResponse extends SpeakeasyBase {
    contentType: string;
    deleteComponentResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
