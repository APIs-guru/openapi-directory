import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";



export class GetPartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Partition" })
  partition?: Partition;
}
