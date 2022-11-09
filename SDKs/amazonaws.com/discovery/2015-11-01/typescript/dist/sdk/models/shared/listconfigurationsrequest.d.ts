import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationItemTypeEnum } from "./configurationitemtypeenum";
import { Filter } from "./filter";
import { OrderByElement } from "./orderbyelement";
export declare class ListConfigurationsRequest extends SpeakeasyBase {
    configurationType: ConfigurationItemTypeEnum;
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    orderBy?: OrderByElement[];
}
