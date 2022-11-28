import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeUpdatePathParams extends SpeakeasyBase {
    name: string;
    updateId: string;
}
export declare class DescribeUpdateQueryParams extends SpeakeasyBase {
    addonName?: string;
    nodegroupName?: string;
}
export declare class DescribeUpdateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeUpdateRequest extends SpeakeasyBase {
    pathParams: DescribeUpdatePathParams;
    queryParams: DescribeUpdateQueryParams;
    headers: DescribeUpdateHeaders;
}
export declare class DescribeUpdateResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeUpdateResponse?: shared.DescribeUpdateResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
