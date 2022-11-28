import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndexDescriptor } from "./partitionindexdescriptor";
export declare class GetPartitionIndexesResponse extends SpeakeasyBase {
    nextToken?: string;
    partitionIndexDescriptorList?: PartitionIndexDescriptor[];
}
