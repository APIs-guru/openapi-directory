import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeContinuousBackupsXAmzTargetEnum {
    DynamoDb20120810DescribeContinuousBackups = "DynamoDB_20120810.DescribeContinuousBackups"
}
export declare class DescribeContinuousBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContinuousBackupsXAmzTargetEnum;
}
export declare class DescribeContinuousBackupsRequest extends SpeakeasyBase {
    headers: DescribeContinuousBackupsHeaders;
    request: shared.DescribeContinuousBackupsInput;
}
export declare class DescribeContinuousBackupsResponse extends SpeakeasyBase {
    contentType: string;
    describeContinuousBackupsOutput?: shared.DescribeContinuousBackupsOutput;
    internalServerError?: any;
    statusCode: number;
    tableNotFoundException?: any;
}
