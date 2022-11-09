import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListConfigurationHistoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListConfigurationHistoryXAmzTargetEnum {
    Ec2WindowsBarleyServiceListConfigurationHistory = "EC2WindowsBarleyService.ListConfigurationHistory"
}
export declare class ListConfigurationHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConfigurationHistoryXAmzTargetEnum;
}
export declare class ListConfigurationHistoryRequest extends SpeakeasyBase {
    queryParams: ListConfigurationHistoryQueryParams;
    headers: ListConfigurationHistoryHeaders;
    request: shared.ListConfigurationHistoryRequest;
}
export declare class ListConfigurationHistoryResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listConfigurationHistoryResponse?: shared.ListConfigurationHistoryResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
