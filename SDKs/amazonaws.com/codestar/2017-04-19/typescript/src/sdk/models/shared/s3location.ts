import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * The Amazon S3 location where the source code files provided with the project request are stored.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketKey" })
  bucketKey?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;
}
