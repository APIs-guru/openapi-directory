import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
export declare class GetPartitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    partitions?: Partition[];
}
