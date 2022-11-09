import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGraphRequestBody extends SpeakeasyBase {
    graphArn: string;
}
export declare class DeleteGraphRequest extends SpeakeasyBase {
    headers: DeleteGraphHeaders;
    request: DeleteGraphRequestBody;
}
export declare class DeleteGraphResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
