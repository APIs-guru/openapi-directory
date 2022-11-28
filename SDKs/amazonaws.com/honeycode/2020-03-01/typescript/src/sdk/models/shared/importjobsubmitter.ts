import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportJobSubmitter
/** 
 * An object that contains the attributes of the submitter of the import job.
**/
export class ImportJobSubmitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn?: string;
}
