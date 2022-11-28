import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
**/
export declare class ConnectionBodyParameter extends SpeakeasyBase {
    isValueSecret?: boolean;
    key?: string;
    value?: string;
}
