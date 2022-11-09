import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedChannelS3StorageSummary
/** 
 * Used to store channel data in an S3 bucket that you manage.
**/
export class CustomerManagedChannelS3StorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
