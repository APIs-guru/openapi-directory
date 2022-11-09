import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountQuota } from "./accountquota";
/**
 * <p/>
**/
export declare class DescribeAccountAttributesResponse extends SpeakeasyBase {
    accountQuotas?: AccountQuota[];
    uniqueAccountIdentifier?: string;
}
