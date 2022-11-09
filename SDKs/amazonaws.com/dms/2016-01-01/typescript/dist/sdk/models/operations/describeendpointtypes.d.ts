import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeEndpointTypesQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeEndpointTypesXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpointTypes = "AmazonDMSv20160101.DescribeEndpointTypes"
}
export declare class DescribeEndpointTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointTypesXAmzTargetEnum;
}
export declare class DescribeEndpointTypesRequest extends SpeakeasyBase {
    queryParams: DescribeEndpointTypesQueryParams;
    headers: DescribeEndpointTypesHeaders;
    request: shared.DescribeEndpointTypesMessage;
}
export declare class DescribeEndpointTypesResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointTypesResponse?: shared.DescribeEndpointTypesResponse;
    statusCode: number;
}
