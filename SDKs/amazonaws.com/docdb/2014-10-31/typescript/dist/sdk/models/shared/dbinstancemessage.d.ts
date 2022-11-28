import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";
/**
 * Represents the output of <a>DescribeDBInstances</a>.
**/
export declare class DbInstanceMessage extends SpeakeasyBase {
    dbInstances?: DbInstance[];
    marker?: string;
}
