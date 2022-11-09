import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportLabelsTaskRunProperties
/** 
 * Specifies configuration properties for an exporting labels task run.
**/
export class ExportLabelsTaskRunProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3Path" })
  outputS3Path?: string;
}
