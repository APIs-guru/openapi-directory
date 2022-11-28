import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Detector } from "./detector";



export class DescribeDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detector" })
  detector?: Detector;
}
