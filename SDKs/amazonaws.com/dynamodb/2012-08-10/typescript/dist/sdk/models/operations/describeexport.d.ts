import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExportXAmzTargetEnum {
    DynamoDb20120810DescribeExport = "DynamoDB_20120810.DescribeExport"
}
export declare class DescribeExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportXAmzTargetEnum;
}
export declare class DescribeExportRequest extends SpeakeasyBase {
    headers: DescribeExportHeaders;
    request: shared.DescribeExportInput;
}
export declare class DescribeExportResponse extends SpeakeasyBase {
    contentType: string;
    describeExportOutput?: shared.DescribeExportOutput;
    exportNotFoundException?: any;
    internalServerError?: any;
    limitExceededException?: any;
    statusCode: number;
}
