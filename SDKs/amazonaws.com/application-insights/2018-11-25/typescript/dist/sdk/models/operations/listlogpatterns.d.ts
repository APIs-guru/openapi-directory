import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListLogPatternsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLogPatternsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListLogPatterns = "EC2WindowsBarleyService.ListLogPatterns"
}
export declare class ListLogPatternsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLogPatternsXAmzTargetEnum;
}
export declare class ListLogPatternsRequest extends SpeakeasyBase {
    queryParams: ListLogPatternsQueryParams;
    headers: ListLogPatternsHeaders;
    request: shared.ListLogPatternsRequest;
}
export declare class ListLogPatternsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listLogPatternsResponse?: shared.ListLogPatternsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
