import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAccountOverviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAccountOverviewRequestBody extends SpeakeasyBase {
    fromTime: Date;
    toTime?: Date;
}
export declare class DescribeAccountOverviewRequest extends SpeakeasyBase {
    headers: DescribeAccountOverviewHeaders;
    request: DescribeAccountOverviewRequestBody;
}
export declare class DescribeAccountOverviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountOverviewResponse?: shared.DescribeAccountOverviewResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
