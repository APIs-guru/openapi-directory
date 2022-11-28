import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMeshPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class DescribeMeshQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeMeshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMeshRequest extends SpeakeasyBase {
    pathParams: DescribeMeshPathParams;
    queryParams: DescribeMeshQueryParams;
    headers: DescribeMeshHeaders;
}
export declare class DescribeMeshResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeMeshOutput?: shared.DescribeMeshOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
