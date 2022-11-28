import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
    mountTargetId: string;
}
export declare class DescribeMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMountTargetSecurityGroupsRequest extends SpeakeasyBase {
    pathParams: DescribeMountTargetSecurityGroupsPathParams;
    headers: DescribeMountTargetSecurityGroupsHeaders;
}
export declare class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeMountTargetSecurityGroupsResponse?: shared.DescribeMountTargetSecurityGroupsResponse;
    incorrectMountTargetState?: any;
    internalServerError?: any;
    mountTargetNotFound?: any;
    statusCode: number;
}
