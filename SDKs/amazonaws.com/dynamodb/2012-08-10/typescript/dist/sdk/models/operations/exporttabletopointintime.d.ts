import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810ExportTableToPointInTime = "DynamoDB_20120810.ExportTableToPointInTime"
}
export declare class ExportTableToPointInTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportTableToPointInTimeXAmzTargetEnum;
}
export declare class ExportTableToPointInTimeRequest extends SpeakeasyBase {
    headers: ExportTableToPointInTimeHeaders;
    request: shared.ExportTableToPointInTimeInput;
}
export declare class ExportTableToPointInTimeResponse extends SpeakeasyBase {
    contentType: string;
    exportConflictException?: any;
    exportTableToPointInTimeOutput?: shared.ExportTableToPointInTimeOutput;
    internalServerError?: any;
    invalidExportTimeException?: any;
    limitExceededException?: any;
    pointInTimeRecoveryUnavailableException?: any;
    statusCode: number;
    tableNotFoundException?: any;
}
