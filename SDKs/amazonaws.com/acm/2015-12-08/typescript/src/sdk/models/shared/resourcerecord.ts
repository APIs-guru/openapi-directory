import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordTypeEnum } from "./recordtypeenum";


// ResourceRecord
/** 
 * Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
**/
export class ResourceRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type: RecordTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
