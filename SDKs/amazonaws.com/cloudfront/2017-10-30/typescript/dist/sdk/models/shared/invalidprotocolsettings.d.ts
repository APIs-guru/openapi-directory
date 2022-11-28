import { SpeakeasyBase } from "../../../internal/utils";
/**
 * You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
**/
export declare class InvalidProtocolSettings extends SpeakeasyBase {
    message?: string;
}
