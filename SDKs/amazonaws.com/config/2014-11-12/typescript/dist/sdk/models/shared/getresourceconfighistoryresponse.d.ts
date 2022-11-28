import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItem } from "./configurationitem";
/**
 * The output for the <a>GetResourceConfigHistory</a> action.
**/
export declare class GetResourceConfigHistoryResponse extends SpeakeasyBase {
    configurationItems?: ConfigurationItem[];
    nextToken?: string;
}
