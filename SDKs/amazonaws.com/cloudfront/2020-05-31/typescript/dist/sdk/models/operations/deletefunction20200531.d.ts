import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFunction20200531PathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteFunction20200531Headers extends SpeakeasyBase {
    ifMatch: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunction20200531Request extends SpeakeasyBase {
    pathParams: DeleteFunction20200531PathParams;
    headers: DeleteFunction20200531Headers;
}
export declare class DeleteFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
