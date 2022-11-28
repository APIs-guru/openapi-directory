import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndexDescriptor } from "./partitionindexdescriptor";



export class GetPartitionIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionIndexDescriptorList", elemType: PartitionIndexDescriptor })
  partitionIndexDescriptorList?: PartitionIndexDescriptor[];
}
