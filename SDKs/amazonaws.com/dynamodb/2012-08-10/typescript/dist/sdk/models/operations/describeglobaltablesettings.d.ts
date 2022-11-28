import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeGlobalTableSettingsXAmzTargetEnum {
    DynamoDb20120810DescribeGlobalTableSettings = "DynamoDB_20120810.DescribeGlobalTableSettings"
}
export declare class DescribeGlobalTableSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGlobalTableSettingsXAmzTargetEnum;
}
export declare class DescribeGlobalTableSettingsRequest extends SpeakeasyBase {
    headers: DescribeGlobalTableSettingsHeaders;
    request: shared.DescribeGlobalTableSettingsInput;
}
export declare class DescribeGlobalTableSettingsResponse extends SpeakeasyBase {
    contentType: string;
    describeGlobalTableSettingsOutput?: shared.DescribeGlobalTableSettingsOutput;
    globalTableNotFoundException?: any;
    internalServerError?: any;
    statusCode: number;
}
