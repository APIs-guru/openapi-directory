import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobRunPathParams extends SpeakeasyBase {
    jobRunId: string;
    virtualClusterId: string;
}
export declare class DescribeJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobRunRequest extends SpeakeasyBase {
    pathParams: DescribeJobRunPathParams;
    headers: DescribeJobRunHeaders;
}
export declare class DescribeJobRunResponse extends SpeakeasyBase {
    contentType: string;
    describeJobRunResponse?: shared.DescribeJobRunResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
