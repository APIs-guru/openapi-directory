import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteConnectionXAmzTargetEnum {
    AmazonDmSv20160101DeleteConnection = "AmazonDMSv20160101.DeleteConnection"
}
export declare class DeleteConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionXAmzTargetEnum;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    headers: DeleteConnectionHeaders;
    request: shared.DeleteConnectionMessage;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    deleteConnectionResponse?: shared.DeleteConnectionResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
