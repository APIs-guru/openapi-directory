import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";



export class GetPartitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Partitions", elemType: Partition })
  partitions?: Partition[];
}
