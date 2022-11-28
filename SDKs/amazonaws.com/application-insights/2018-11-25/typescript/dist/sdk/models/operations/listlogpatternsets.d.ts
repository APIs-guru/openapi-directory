import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLogPatternSetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLogPatternSetsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListLogPatternSets = "EC2WindowsBarleyService.ListLogPatternSets"
}
export declare class ListLogPatternSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLogPatternSetsXAmzTargetEnum;
}
export declare class ListLogPatternSetsRequest extends SpeakeasyBase {
    queryParams: ListLogPatternSetsQueryParams;
    headers: ListLogPatternSetsHeaders;
    request: shared.ListLogPatternSetsRequest;
}
export declare class ListLogPatternSetsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listLogPatternSetsResponse?: shared.ListLogPatternSetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
