import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGlobalTableSettingsXAmzTargetEnum {
    DynamoDb20120810UpdateGlobalTableSettings = "DynamoDB_20120810.UpdateGlobalTableSettings"
}
export declare class UpdateGlobalTableSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGlobalTableSettingsXAmzTargetEnum;
}
export declare class UpdateGlobalTableSettingsRequest extends SpeakeasyBase {
    headers: UpdateGlobalTableSettingsHeaders;
    request: shared.UpdateGlobalTableSettingsInput;
}
export declare class UpdateGlobalTableSettingsResponse extends SpeakeasyBase {
    contentType: string;
    globalTableNotFoundException?: any;
    indexNotFoundException?: any;
    internalServerError?: any;
    limitExceededException?: any;
    replicaNotFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
    updateGlobalTableSettingsOutput?: shared.UpdateGlobalTableSettingsOutput;
}
