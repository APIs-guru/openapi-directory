import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Partition } from "./partition";


export class GetPartitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Partition" })
  partition?: Partition;
}
