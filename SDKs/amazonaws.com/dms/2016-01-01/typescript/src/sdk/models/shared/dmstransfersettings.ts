import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DmsTransferSettings
/** 
 *  The settings in JSON format for the DMS Transfer type source endpoint. 
**/
export class DmsTransferSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;
}
