import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the inputs for the <a>EnableSso</a> operation.
**/
export declare class EnableSsoRequest extends SpeakeasyBase {
    directoryId: string;
    password?: string;
    userName?: string;
}
