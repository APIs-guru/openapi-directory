import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContinuousBackupsXAmzTargetEnum {
    DynamoDb20120810UpdateContinuousBackups = "DynamoDB_20120810.UpdateContinuousBackups"
}
export declare class UpdateContinuousBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContinuousBackupsXAmzTargetEnum;
}
export declare class UpdateContinuousBackupsRequest extends SpeakeasyBase {
    headers: UpdateContinuousBackupsHeaders;
    request: shared.UpdateContinuousBackupsInput;
}
export declare class UpdateContinuousBackupsResponse extends SpeakeasyBase {
    contentType: string;
    continuousBackupsUnavailableException?: any;
    internalServerError?: any;
    statusCode: number;
    tableNotFoundException?: any;
    updateContinuousBackupsOutput?: shared.UpdateContinuousBackupsOutput;
}
