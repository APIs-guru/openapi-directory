import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Limits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maximumPartitionCount: number;

  @SpeakeasyMetadata()
  maximumReplicationCount: number;
}
