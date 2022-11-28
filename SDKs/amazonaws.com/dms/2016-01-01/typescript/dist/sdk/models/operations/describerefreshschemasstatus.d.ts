import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRefreshSchemasStatusXAmzTargetEnum {
    AmazonDmSv20160101DescribeRefreshSchemasStatus = "AmazonDMSv20160101.DescribeRefreshSchemasStatus"
}
export declare class DescribeRefreshSchemasStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRefreshSchemasStatusXAmzTargetEnum;
}
export declare class DescribeRefreshSchemasStatusRequest extends SpeakeasyBase {
    headers: DescribeRefreshSchemasStatusHeaders;
    request: shared.DescribeRefreshSchemasStatusMessage;
}
export declare class DescribeRefreshSchemasStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeRefreshSchemasStatusResponse?: shared.DescribeRefreshSchemasStatusResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
