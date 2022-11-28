import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// AccessKeyMetadata
/** 
 * <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
**/
export class AccessKeyMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessKeyId?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  status?: StatusTypeEnum;

  @SpeakeasyMetadata()
  userName?: string;
}
