import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFieldLevelEncryption20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryption20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryption20190326Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryption20190326PathParams;
    headers: GetFieldLevelEncryption20190326Headers;
}
export declare class GetFieldLevelEncryption20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
