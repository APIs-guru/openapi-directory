import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInterconnectXAmzTargetEnum {
    OvertureServiceCreateInterconnect = "OvertureService.CreateInterconnect"
}
export declare class CreateInterconnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInterconnectXAmzTargetEnum;
}
export declare class CreateInterconnectRequest extends SpeakeasyBase {
    headers: CreateInterconnectHeaders;
    request: shared.CreateInterconnectRequest;
}
export declare class CreateInterconnectResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    interconnect?: shared.Interconnect;
    statusCode: number;
    tooManyTagsException?: any;
}
