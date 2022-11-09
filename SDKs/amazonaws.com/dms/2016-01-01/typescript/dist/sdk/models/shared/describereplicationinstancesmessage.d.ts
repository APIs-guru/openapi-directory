import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
/**
 * <p/>
**/
export declare class DescribeReplicationInstancesMessage extends SpeakeasyBase {
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
}
