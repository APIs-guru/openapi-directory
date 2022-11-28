import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGlobalTableXAmzTargetEnum {
    DynamoDb20120810DescribeGlobalTable = "DynamoDB_20120810.DescribeGlobalTable"
}
export declare class DescribeGlobalTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGlobalTableXAmzTargetEnum;
}
export declare class DescribeGlobalTableRequest extends SpeakeasyBase {
    headers: DescribeGlobalTableHeaders;
    request: shared.DescribeGlobalTableInput;
}
export declare class DescribeGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    describeGlobalTableOutput?: shared.DescribeGlobalTableOutput;
    globalTableNotFoundException?: any;
    internalServerError?: any;
    statusCode: number;
}
