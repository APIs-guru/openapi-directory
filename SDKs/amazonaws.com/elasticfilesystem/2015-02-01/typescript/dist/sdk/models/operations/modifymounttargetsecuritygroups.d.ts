import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyMountTargetSecurityGroupsPathParams extends SpeakeasyBase {
    mountTargetId: string;
}
export declare class ModifyMountTargetSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ModifyMountTargetSecurityGroupsRequestBody extends SpeakeasyBase {
    securityGroups?: string[];
}
export declare class ModifyMountTargetSecurityGroupsRequest extends SpeakeasyBase {
    pathParams: ModifyMountTargetSecurityGroupsPathParams;
    headers: ModifyMountTargetSecurityGroupsHeaders;
    request: ModifyMountTargetSecurityGroupsRequestBody;
}
export declare class ModifyMountTargetSecurityGroupsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    incorrectMountTargetState?: any;
    internalServerError?: any;
    mountTargetNotFound?: any;
    securityGroupLimitExceeded?: any;
    securityGroupNotFound?: any;
    statusCode: number;
}
