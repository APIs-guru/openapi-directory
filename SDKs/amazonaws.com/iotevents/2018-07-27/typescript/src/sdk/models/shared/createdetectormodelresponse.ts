import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelConfiguration } from "./detectormodelconfiguration";



export class CreateDetectorModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelConfiguration" })
  detectorModelConfiguration?: DetectorModelConfiguration;
}
