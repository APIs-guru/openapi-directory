import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportLabelsTaskRunProperties
/** 
 * Specifies configuration properties for an exporting labels task run.
**/
export class ExportLabelsTaskRunProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputS3Path" })
  outputS3Path?: string;
}
