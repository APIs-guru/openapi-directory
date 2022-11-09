import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101ModifyReplicationInstance = "AmazonDMSv20160101.ModifyReplicationInstance"
}
export declare class ModifyReplicationInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationInstanceXAmzTargetEnum;
}
export declare class ModifyReplicationInstanceRequest extends SpeakeasyBase {
    headers: ModifyReplicationInstanceHeaders;
    request: shared.ModifyReplicationInstanceMessage;
}
export declare class ModifyReplicationInstanceResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    insufficientResourceCapacityFault?: any;
    invalidResourceStateFault?: any;
    modifyReplicationInstanceResponse?: shared.ModifyReplicationInstanceResponse;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
    storageQuotaExceededFault?: any;
    upgradeDependencyFailureFault?: any;
}
