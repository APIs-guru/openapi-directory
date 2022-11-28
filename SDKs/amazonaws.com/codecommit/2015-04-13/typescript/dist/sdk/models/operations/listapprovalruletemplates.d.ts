import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApprovalRuleTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListApprovalRuleTemplatesXAmzTargetEnum {
    CodeCommit20150413ListApprovalRuleTemplates = "CodeCommit_20150413.ListApprovalRuleTemplates"
}
export declare class ListApprovalRuleTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApprovalRuleTemplatesXAmzTargetEnum;
}
export declare class ListApprovalRuleTemplatesRequest extends SpeakeasyBase {
    queryParams: ListApprovalRuleTemplatesQueryParams;
    headers: ListApprovalRuleTemplatesHeaders;
    request: shared.ListApprovalRuleTemplatesInput;
}
export declare class ListApprovalRuleTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    listApprovalRuleTemplatesOutput?: shared.ListApprovalRuleTemplatesOutput;
    statusCode: number;
}
