import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorModel } from "./detectormodel";


export class DescribeDetectorModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModel" })
  detectorModel?: DetectorModel;
}
