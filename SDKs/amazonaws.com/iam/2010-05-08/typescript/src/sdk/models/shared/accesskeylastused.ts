import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessKeyLastUsed
/** 
 * <p>Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
**/
export class AccessKeyLastUsed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastUsedDate: Date;

  @SpeakeasyMetadata()
  region: string;

  @SpeakeasyMetadata()
  serviceName: string;
}
