import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateDomainHeaders extends SpeakeasyBase {
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
export declare class CreateDomainRequestBodyMatching extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class CreateDomainRequestBody extends SpeakeasyBase {
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays: number;
    matching?: CreateDomainRequestBodyMatching;
    tags?: Map<string, string>;
}
export declare class CreateDomainRequest extends SpeakeasyBase {
    pathParams: CreateDomainPathParams;
    headers: CreateDomainHeaders;
    request: CreateDomainRequestBody;
}
export declare class CreateDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    createDomainResponse?: shared.CreateDomainResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
