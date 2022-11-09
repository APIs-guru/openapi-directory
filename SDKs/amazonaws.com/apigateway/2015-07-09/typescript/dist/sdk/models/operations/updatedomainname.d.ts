import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDomainNamePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class UpdateDomainNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDomainNameRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateDomainNameRequest extends SpeakeasyBase {
    pathParams: UpdateDomainNamePathParams;
    headers: UpdateDomainNameHeaders;
    request: UpdateDomainNameRequestBody;
}
export declare class UpdateDomainNameResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    domainName?: shared.DomainName;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
