import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationEvent } from "./configurationevent";
export declare class ListConfigurationHistoryResponse extends SpeakeasyBase {
    eventList?: ConfigurationEvent[];
    nextToken?: string;
}
