import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorModel } from "./detectormodel";



export class DescribeDetectorModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModel" })
  detectorModel?: DetectorModel;
}
