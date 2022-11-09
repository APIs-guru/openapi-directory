import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionIndexDescriptor } from "./partitionindexdescriptor";


export class GetPartitionIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PartitionIndexDescriptorList", elemType: shared.PartitionIndexDescriptor })
  partitionIndexDescriptorList?: PartitionIndexDescriptor[];
}
