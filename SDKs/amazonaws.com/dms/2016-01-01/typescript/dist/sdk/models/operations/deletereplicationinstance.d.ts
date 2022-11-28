import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationInstance = "AmazonDMSv20160101.DeleteReplicationInstance"
}
export declare class DeleteReplicationInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationInstanceXAmzTargetEnum;
}
export declare class DeleteReplicationInstanceRequest extends SpeakeasyBase {
    headers: DeleteReplicationInstanceHeaders;
    request: shared.DeleteReplicationInstanceMessage;
}
export declare class DeleteReplicationInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deleteReplicationInstanceResponse?: shared.DeleteReplicationInstanceResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
