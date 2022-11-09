import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeregisterAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterAccountRequest extends SpeakeasyBase {
    headers: DeregisterAccountHeaders;
}
export declare class DeregisterAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deregisterAccountResponse?: shared.DeregisterAccountResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
