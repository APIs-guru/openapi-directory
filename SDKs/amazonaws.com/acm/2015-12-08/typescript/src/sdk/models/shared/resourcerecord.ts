import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordTypeEnum } from "./recordtypeenum";



// ResourceRecord
/** 
 * Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
**/
export class ResourceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: RecordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
