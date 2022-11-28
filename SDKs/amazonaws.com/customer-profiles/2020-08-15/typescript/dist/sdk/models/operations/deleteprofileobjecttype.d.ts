import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfileObjectTypePathParams extends SpeakeasyBase {
    domainName: string;
    objectTypeName: string;
}
export declare class DeleteProfileObjectTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProfileObjectTypeRequest extends SpeakeasyBase {
    pathParams: DeleteProfileObjectTypePathParams;
    headers: DeleteProfileObjectTypeHeaders;
}
export declare class DeleteProfileObjectTypeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteProfileObjectTypeResponse?: shared.DeleteProfileObjectTypeResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
