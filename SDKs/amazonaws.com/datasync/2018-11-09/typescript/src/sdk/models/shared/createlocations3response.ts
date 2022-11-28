import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLocationS3Response
/** 
 * CreateLocationS3Response
**/
export class CreateLocationS3Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;
}
