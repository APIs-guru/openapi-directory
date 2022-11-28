import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProfileObjectTypePathParams extends SpeakeasyBase {
    domainName: string;
    objectTypeName: string;
}
export declare class PutProfileObjectTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutProfileObjectTypeRequestBody extends SpeakeasyBase {
    allowProfileCreation?: boolean;
    description: string;
    encryptionKey?: string;
    expirationDays?: number;
    fields?: Map<string, shared.ObjectTypeField>;
    keys?: Map<string, shared.ObjectTypeKey[]>;
    tags?: Map<string, string>;
    templateId?: string;
}
export declare class PutProfileObjectTypeRequest extends SpeakeasyBase {
    pathParams: PutProfileObjectTypePathParams;
    headers: PutProfileObjectTypeHeaders;
    request: PutProfileObjectTypeRequestBody;
}
export declare class PutProfileObjectTypeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    putProfileObjectTypeResponse?: shared.PutProfileObjectTypeResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
