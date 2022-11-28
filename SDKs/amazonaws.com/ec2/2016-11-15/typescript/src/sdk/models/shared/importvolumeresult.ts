import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversionTask } from "./conversiontask";



export class ImportVolumeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTask?: ConversionTask;
}
