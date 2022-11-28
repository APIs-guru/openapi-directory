import { SpeakeasyBase } from "../../../internal/utils";
import { TieringPolicyNameEnum } from "./tieringpolicynameenum";
/**
 * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
**/
export declare class TieringPolicy extends SpeakeasyBase {
    coolingPeriod?: number;
    name?: TieringPolicyNameEnum;
}
