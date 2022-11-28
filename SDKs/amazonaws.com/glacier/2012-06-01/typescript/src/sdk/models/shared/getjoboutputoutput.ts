import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetJobOutputOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetJobOutputOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
