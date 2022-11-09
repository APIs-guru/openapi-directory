import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeJobDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeJobDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobDefinitionsRequestBody extends SpeakeasyBase {
    jobDefinitionName?: string;
    jobDefinitions?: string[];
    maxResults?: number;
    nextToken?: string;
    status?: string;
}
export declare class DescribeJobDefinitionsRequest extends SpeakeasyBase {
    queryParams: DescribeJobDefinitionsQueryParams;
    headers: DescribeJobDefinitionsHeaders;
    request: DescribeJobDefinitionsRequestBody;
}
export declare class DescribeJobDefinitionsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeJobDefinitionsResponse?: shared.DescribeJobDefinitionsResponse;
    serverException?: any;
    statusCode: number;
}
