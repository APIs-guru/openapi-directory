import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DmsTransferSettings
/** 
 *  The settings in JSON format for the DMS Transfer type source endpoint. 
**/
export class DmsTransferSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;
}
