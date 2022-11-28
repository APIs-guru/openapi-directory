import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyListenerActionEnum {
    ModifyListener = "ModifyListener"
}
export declare enum PostModifyListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostModifyListenerQueryParams extends SpeakeasyBase {
    action: PostModifyListenerActionEnum;
    version: PostModifyListenerVersionEnum;
}
export declare class PostModifyListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyListenerRequest extends SpeakeasyBase {
    queryParams: PostModifyListenerQueryParams;
    headers: PostModifyListenerHeaders;
    request?: Uint8Array;
}
export declare class PostModifyListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
