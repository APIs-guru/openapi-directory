import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListByoipCidrsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListByoipCidrsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListByoipCidrs = "GlobalAccelerator_V20180706.ListByoipCidrs"
}
export declare class ListByoipCidrsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListByoipCidrsXAmzTargetEnum;
}
export declare class ListByoipCidrsRequest extends SpeakeasyBase {
    queryParams: ListByoipCidrsQueryParams;
    headers: ListByoipCidrsHeaders;
    request: shared.ListByoipCidrsRequest;
}
export declare class ListByoipCidrsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listByoipCidrsResponse?: shared.ListByoipCidrsResponse;
    statusCode: number;
}
