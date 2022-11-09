import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportJobSubmitter
/** 
 * An object that contains the attributes of the submitter of the import job.
**/
export class ImportJobSubmitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=userArn" })
  userArn?: string;
}
