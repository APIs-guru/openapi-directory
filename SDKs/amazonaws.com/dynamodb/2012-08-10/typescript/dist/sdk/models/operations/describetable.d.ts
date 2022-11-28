import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTableXAmzTargetEnum {
    DynamoDb20120810DescribeTable = "DynamoDB_20120810.DescribeTable"
}
export declare class DescribeTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableXAmzTargetEnum;
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    headers: DescribeTableHeaders;
    request: shared.DescribeTableInput;
}
export declare class DescribeTableResponse extends SpeakeasyBase {
    contentType: string;
    describeTableOutput?: shared.DescribeTableOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
