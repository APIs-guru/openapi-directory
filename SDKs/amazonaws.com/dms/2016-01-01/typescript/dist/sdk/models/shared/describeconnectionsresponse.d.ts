import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";
/**
 * <p/>
**/
export declare class DescribeConnectionsResponse extends SpeakeasyBase {
    connections?: Connection[];
    marker?: string;
}
