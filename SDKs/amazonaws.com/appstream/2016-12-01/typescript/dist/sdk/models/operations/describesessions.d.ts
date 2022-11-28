import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSessionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeSessions = "PhotonAdminProxyService.DescribeSessions"
}
export declare class DescribeSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSessionsXAmzTargetEnum;
}
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    headers: DescribeSessionsHeaders;
    request: shared.DescribeSessionsRequest;
}
export declare class DescribeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    describeSessionsResult?: shared.DescribeSessionsResult;
    invalidParameterCombinationException?: any;
    statusCode: number;
}
