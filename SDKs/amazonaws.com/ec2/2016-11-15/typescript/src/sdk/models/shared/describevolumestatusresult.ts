import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusItem } from "./volumestatusitem";



export class DescribeVolumeStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VolumeStatusItem })
  volumeStatuses?: VolumeStatusItem[];
}
