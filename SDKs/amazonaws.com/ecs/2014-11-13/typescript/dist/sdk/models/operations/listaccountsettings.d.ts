import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountSettingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountSettingsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListAccountSettings = "AmazonEC2ContainerServiceV20141113.ListAccountSettings"
}
export declare class ListAccountSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountSettingsXAmzTargetEnum;
}
export declare class ListAccountSettingsRequest extends SpeakeasyBase {
    queryParams: ListAccountSettingsQueryParams;
    headers: ListAccountSettingsHeaders;
    request: shared.ListAccountSettingsRequest;
}
export declare class ListAccountSettingsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listAccountSettingsResponse?: shared.ListAccountSettingsResponse;
    serverException?: any;
    statusCode: number;
}
