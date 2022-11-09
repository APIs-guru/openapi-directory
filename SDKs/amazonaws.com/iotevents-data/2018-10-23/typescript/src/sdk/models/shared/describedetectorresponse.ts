import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Detector } from "./detector";


export class DescribeDetectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detector" })
  detector?: Detector;
}
