import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportLabelsTaskRunProperties
/** 
 * Specifies configuration properties for an importing labels task run.
**/
export class ImportLabelsTaskRunProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputS3Path" })
  inputS3Path?: string;

  @Metadata({ data: "json, name=Replace" })
  replace?: boolean;
}
