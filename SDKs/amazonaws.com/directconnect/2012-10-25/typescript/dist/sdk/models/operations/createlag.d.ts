import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLagXAmzTargetEnum {
    OvertureServiceCreateLag = "OvertureService.CreateLag"
}
export declare class CreateLagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLagXAmzTargetEnum;
}
export declare class CreateLagRequest extends SpeakeasyBase {
    headers: CreateLagHeaders;
    request: shared.CreateLagRequest;
}
export declare class CreateLagResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    lag?: shared.Lag;
    statusCode: number;
    tooManyTagsException?: any;
}
