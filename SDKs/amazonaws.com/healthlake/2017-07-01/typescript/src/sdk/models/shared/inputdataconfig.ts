import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputDataConfig
/** 
 *  The input properties for an import job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
