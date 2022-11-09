import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteServiceLinkedRole20170325PathParams extends SpeakeasyBase {
    roleName: string;
}
export declare class DeleteServiceLinkedRole20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteServiceLinkedRole20170325Request extends SpeakeasyBase {
    pathParams: DeleteServiceLinkedRole20170325PathParams;
    headers: DeleteServiceLinkedRole20170325Headers;
}
export declare class DeleteServiceLinkedRole20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
