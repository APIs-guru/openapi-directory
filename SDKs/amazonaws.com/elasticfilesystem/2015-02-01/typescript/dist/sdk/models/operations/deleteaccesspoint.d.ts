import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAccessPointPathParams extends SpeakeasyBase {
    accessPointId: string;
}
export declare class DeleteAccessPointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAccessPointRequest extends SpeakeasyBase {
    pathParams: DeleteAccessPointPathParams;
    headers: DeleteAccessPointHeaders;
}
export declare class DeleteAccessPointResponse extends SpeakeasyBase {
    accessPointNotFound?: any;
    badRequest?: any;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
