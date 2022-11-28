import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversionTask } from "./conversiontask";



export class ImportInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTask?: ConversionTask;
}
