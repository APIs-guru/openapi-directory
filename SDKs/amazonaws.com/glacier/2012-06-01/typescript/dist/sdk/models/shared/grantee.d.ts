import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeEnum } from "./typeenum";
/**
 * Contains information about the grantee.
**/
export declare class Grantee extends SpeakeasyBase {
    displayName?: string;
    emailAddress?: string;
    id?: string;
    type: TypeEnum;
    uri?: string;
}
