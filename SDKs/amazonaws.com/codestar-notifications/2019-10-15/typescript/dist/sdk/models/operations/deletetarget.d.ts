import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTargetRequestBody extends SpeakeasyBase {
    forceUnsubscribeAll?: boolean;
    targetAddress: string;
}
export declare class DeleteTargetRequest extends SpeakeasyBase {
    headers: DeleteTargetHeaders;
    request: DeleteTargetRequestBody;
}
export declare class DeleteTargetResponse extends SpeakeasyBase {
    contentType: string;
    deleteTargetResult?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
