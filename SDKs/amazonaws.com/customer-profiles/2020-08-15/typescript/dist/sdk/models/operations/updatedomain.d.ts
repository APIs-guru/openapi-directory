import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class UpdateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The flag that enables the matching process of duplicate profiles.
**/
export declare class UpdateDomainRequestBodyMatching extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateDomainRequestBody extends SpeakeasyBase {
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays?: number;
    matching?: UpdateDomainRequestBodyMatching;
    tags?: Map<string, string>;
}
export declare class UpdateDomainRequest extends SpeakeasyBase {
    pathParams: UpdateDomainPathParams;
    headers: UpdateDomainHeaders;
    request: UpdateDomainRequestBody;
}
export declare class UpdateDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDomainResponse?: shared.UpdateDomainResponse;
}
