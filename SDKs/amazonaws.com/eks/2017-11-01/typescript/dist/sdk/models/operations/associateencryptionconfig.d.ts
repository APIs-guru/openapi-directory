import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateEncryptionConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssociateEncryptionConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateEncryptionConfigRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    encryptionConfig: shared.EncryptionConfig[];
}
export declare class AssociateEncryptionConfigRequest extends SpeakeasyBase {
    pathParams: AssociateEncryptionConfigPathParams;
    headers: AssociateEncryptionConfigHeaders;
    request: AssociateEncryptionConfigRequestBody;
}
export declare class AssociateEncryptionConfigResponse extends SpeakeasyBase {
    associateEncryptionConfigResponse?: shared.AssociateEncryptionConfigResponse;
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
