import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSchemasQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeSchemasXAmzTargetEnum {
    AmazonDmSv20160101DescribeSchemas = "AmazonDMSv20160101.DescribeSchemas"
}
export declare class DescribeSchemasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSchemasXAmzTargetEnum;
}
export declare class DescribeSchemasRequest extends SpeakeasyBase {
    queryParams: DescribeSchemasQueryParams;
    headers: DescribeSchemasHeaders;
    request: shared.DescribeSchemasMessage;
}
export declare class DescribeSchemasResponse extends SpeakeasyBase {
    contentType: string;
    describeSchemasResponse?: shared.DescribeSchemasResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
