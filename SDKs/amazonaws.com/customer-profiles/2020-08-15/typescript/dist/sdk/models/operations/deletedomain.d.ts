import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    pathParams: DeleteDomainPathParams;
    headers: DeleteDomainHeaders;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    deleteDomainResponse?: shared.DeleteDomainResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
