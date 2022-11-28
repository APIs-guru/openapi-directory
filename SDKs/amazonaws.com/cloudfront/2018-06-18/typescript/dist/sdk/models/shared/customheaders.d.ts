import { SpeakeasyBase } from "../../../internal/utils";
import { OriginCustomHeader } from "./origincustomheader";
/**
 * A complex type that contains the list of Custom Headers for each origin.
**/
export declare class CustomHeaders extends SpeakeasyBase {
    items?: OriginCustomHeader[];
    quantity: number;
}
