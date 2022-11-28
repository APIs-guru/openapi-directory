import { SpeakeasyBase } from "../../../internal/utils";
import { CloudHsmObjectStateEnum } from "./cloudhsmobjectstateenum";
/**
 * Contains the output of the <a>DescribeHapg</a> action.
**/
export declare class DescribeHapgResponse extends SpeakeasyBase {
    hapgArn?: string;
    hapgSerial?: string;
    hsmsLastActionFailed?: string[];
    hsmsPendingDeletion?: string[];
    hsmsPendingRegistration?: string[];
    label?: string;
    lastModifiedTimestamp?: string;
    partitionSerialList?: string[];
    state?: CloudHsmObjectStateEnum;
}
