import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMountTargetsQueryParams extends SpeakeasyBase {
    accessPointId?: string;
    fileSystemId?: string;
    marker?: string;
    maxItems?: number;
    mountTargetId?: string;
}
export declare class DescribeMountTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMountTargetsRequest extends SpeakeasyBase {
    queryParams: DescribeMountTargetsQueryParams;
    headers: DescribeMountTargetsHeaders;
}
export declare class DescribeMountTargetsResponse extends SpeakeasyBase {
    accessPointNotFound?: any;
    badRequest?: any;
    contentType: string;
    describeMountTargetsResponse?: shared.DescribeMountTargetsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    mountTargetNotFound?: any;
    statusCode: number;
}
