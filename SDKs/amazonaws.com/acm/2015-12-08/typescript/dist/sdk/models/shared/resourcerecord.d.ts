import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordTypeEnum } from "./recordtypeenum";
/**
 * Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action.
**/
export declare class ResourceRecord extends SpeakeasyBase {
    name: string;
    type: RecordTypeEnum;
    value: string;
}
