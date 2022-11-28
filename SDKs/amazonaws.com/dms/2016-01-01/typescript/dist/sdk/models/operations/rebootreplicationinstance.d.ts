import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebootReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101RebootReplicationInstance = "AmazonDMSv20160101.RebootReplicationInstance"
}
export declare class RebootReplicationInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootReplicationInstanceXAmzTargetEnum;
}
export declare class RebootReplicationInstanceRequest extends SpeakeasyBase {
    headers: RebootReplicationInstanceHeaders;
    request: shared.RebootReplicationInstanceMessage;
}
export declare class RebootReplicationInstanceResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    rebootReplicationInstanceResponse?: shared.RebootReplicationInstanceResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
