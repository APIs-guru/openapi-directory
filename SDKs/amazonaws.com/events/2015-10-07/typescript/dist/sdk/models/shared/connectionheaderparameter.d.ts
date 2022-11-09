import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
**/
export declare class ConnectionHeaderParameter extends SpeakeasyBase {
    isValueSecret?: boolean;
    key?: string;
    value?: string;
}
