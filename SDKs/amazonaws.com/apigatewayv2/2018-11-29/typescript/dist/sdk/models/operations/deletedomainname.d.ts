import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDomainNamePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteDomainNameHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDomainNameRequest extends SpeakeasyBase {
    pathParams: DeleteDomainNamePathParams;
    headers: DeleteDomainNameHeaders;
}
export declare class DeleteDomainNameResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
