import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportLabelsTaskRunProperties
/** 
 * Specifies configuration properties for an importing labels task run.
**/
export class ImportLabelsTaskRunProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputS3Path" })
  inputS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=Replace" })
  replace?: boolean;
}
