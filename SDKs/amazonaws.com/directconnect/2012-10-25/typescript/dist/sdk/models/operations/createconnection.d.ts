import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateConnectionXAmzTargetEnum {
    OvertureServiceCreateConnection = "OvertureService.CreateConnection"
}
export declare class CreateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    headers: CreateConnectionHeaders;
    request: shared.CreateConnectionRequest;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
