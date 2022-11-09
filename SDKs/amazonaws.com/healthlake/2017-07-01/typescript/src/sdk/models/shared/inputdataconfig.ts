import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputDataConfig
/** 
 *  The input properties for an import job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
