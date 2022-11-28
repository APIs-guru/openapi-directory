import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComponentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListComponentsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListComponents = "EC2WindowsBarleyService.ListComponents"
}
export declare class ListComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListComponentsXAmzTargetEnum;
}
export declare class ListComponentsRequest extends SpeakeasyBase {
    queryParams: ListComponentsQueryParams;
    headers: ListComponentsHeaders;
    request: shared.ListComponentsRequest;
}
export declare class ListComponentsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listComponentsResponse?: shared.ListComponentsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
