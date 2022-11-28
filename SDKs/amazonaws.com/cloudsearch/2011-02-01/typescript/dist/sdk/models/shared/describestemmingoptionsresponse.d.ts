import { SpeakeasyBase } from "../../../internal/utils";
import { StemmingOptionsStatus } from "./stemmingoptionsstatus";
/**
 * A response message that contains the stemming options for a search domain.
**/
export declare class DescribeStemmingOptionsResponse extends SpeakeasyBase {
    stems: StemmingOptionsStatus;
}
