import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetKeystorePathParams extends SpeakeasyBase {
    authorizableId: string;
    intermediatePath: string;
}
export declare class GetKeystoreRequest extends SpeakeasyBase {
    pathParams: GetKeystorePathParams;
}
export declare class GetKeystoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getKeystoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
