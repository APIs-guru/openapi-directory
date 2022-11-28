import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigListItem } from "./configlistitem";
/**
 * <p/>
**/
export declare class ListConfigsResponse extends SpeakeasyBase {
    configList?: ConfigListItem[];
    nextToken?: string;
}
