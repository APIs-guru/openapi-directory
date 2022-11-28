import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBackupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBackupsXAmzTargetEnum {
    BaldrApiServiceDescribeBackups = "BaldrApiService.DescribeBackups"
}
export declare class DescribeBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupsXAmzTargetEnum;
}
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    queryParams: DescribeBackupsQueryParams;
    headers: DescribeBackupsHeaders;
    request: shared.DescribeBackupsRequest;
}
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    cloudHsmTagException?: any;
    contentType: string;
    describeBackupsResponse?: shared.DescribeBackupsResponse;
    statusCode: number;
}
