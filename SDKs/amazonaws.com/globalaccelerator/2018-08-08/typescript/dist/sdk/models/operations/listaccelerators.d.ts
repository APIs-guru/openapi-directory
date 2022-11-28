import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAcceleratorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListAccelerators = "GlobalAccelerator_V20180706.ListAccelerators"
}
export declare class ListAcceleratorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAcceleratorsXAmzTargetEnum;
}
export declare class ListAcceleratorsRequest extends SpeakeasyBase {
    queryParams: ListAcceleratorsQueryParams;
    headers: ListAcceleratorsHeaders;
    request: shared.ListAcceleratorsRequest;
}
export declare class ListAcceleratorsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listAcceleratorsResponse?: shared.ListAcceleratorsResponse;
    statusCode: number;
}
