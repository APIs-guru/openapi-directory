import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GenerateClientCertificateRequestBody extends SpeakeasyBase {
    description?: string;
    tags?: Map<string, string>;
}
export declare class GenerateClientCertificateRequest extends SpeakeasyBase {
    headers: GenerateClientCertificateHeaders;
    request: GenerateClientCertificateRequestBody;
}
export declare class GenerateClientCertificateResponse extends SpeakeasyBase {
    badRequestException?: any;
    clientCertificate?: shared.ClientCertificate;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
