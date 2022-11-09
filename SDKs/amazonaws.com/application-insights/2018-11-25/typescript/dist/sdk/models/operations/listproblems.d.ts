import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListProblemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProblemsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListProblems = "EC2WindowsBarleyService.ListProblems"
}
export declare class ListProblemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProblemsXAmzTargetEnum;
}
export declare class ListProblemsRequest extends SpeakeasyBase {
    queryParams: ListProblemsQueryParams;
    headers: ListProblemsHeaders;
    request: shared.ListProblemsRequest;
}
export declare class ListProblemsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listProblemsResponse?: shared.ListProblemsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
