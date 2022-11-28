import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppPkcs12P12File extends SpeakeasyBase {
    content: Uint8Array;
    p12File: string;
}
export declare class AppPkcs12 extends SpeakeasyBase {
    p12File: AppPkcs12P12File;
    p12Pass: string;
}
