import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConnectorsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class DescribeConnectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeConnectorsRequestBody extends SpeakeasyBase {
    connectorTypes?: shared.ConnectorTypeEnum[];
    nextToken?: string;
}
export declare class DescribeConnectorsRequest extends SpeakeasyBase {
    queryParams: DescribeConnectorsQueryParams;
    headers: DescribeConnectorsHeaders;
    request: DescribeConnectorsRequestBody;
}
export declare class DescribeConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    describeConnectorsResponse?: shared.DescribeConnectorsResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
