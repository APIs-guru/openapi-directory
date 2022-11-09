import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorModelConfiguration } from "./detectormodelconfiguration";


export class UpdateDetectorModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelConfiguration" })
  detectorModelConfiguration?: DetectorModelConfiguration;
}
