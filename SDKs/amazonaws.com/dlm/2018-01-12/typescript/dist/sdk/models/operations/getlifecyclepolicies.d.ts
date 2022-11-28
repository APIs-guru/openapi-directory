import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLifecyclePoliciesStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Error = "ERROR"
}
export declare class GetLifecyclePoliciesQueryParams extends SpeakeasyBase {
    policyIds?: string[];
    resourceTypes?: shared.ResourceTypeValuesEnum[];
    state?: GetLifecyclePoliciesStateEnum;
    tagsToAdd?: string[];
    targetTags?: string[];
}
export declare class GetLifecyclePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLifecyclePoliciesRequest extends SpeakeasyBase {
    queryParams: GetLifecyclePoliciesQueryParams;
    headers: GetLifecyclePoliciesHeaders;
}
export declare class GetLifecyclePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    getLifecyclePoliciesResponse?: shared.GetLifecyclePoliciesResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
