import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedChannelS3Storage
/** 
 * Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.
**/
export class CustomerManagedChannelS3Storage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
