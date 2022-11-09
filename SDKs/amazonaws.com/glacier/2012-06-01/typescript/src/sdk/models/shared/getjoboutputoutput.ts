import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetJobOutputOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetJobOutputOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
