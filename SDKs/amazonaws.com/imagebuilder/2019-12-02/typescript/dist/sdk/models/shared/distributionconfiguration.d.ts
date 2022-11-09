import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Distribution } from "./distribution";
/**
 * A distribution configuration.
**/
export declare class DistributionConfiguration extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    distributions?: Distribution[];
    name?: string;
    tags?: Map<string, string>;
    timeoutMinutes: number;
}
