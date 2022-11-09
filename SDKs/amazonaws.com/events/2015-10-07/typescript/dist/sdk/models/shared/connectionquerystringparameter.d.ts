import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
**/
export declare class ConnectionQueryStringParameter extends SpeakeasyBase {
    isValueSecret?: boolean;
    key?: string;
    value?: string;
}
