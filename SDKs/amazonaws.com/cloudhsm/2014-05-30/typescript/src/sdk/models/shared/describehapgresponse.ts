import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudHsmObjectStateEnum } from "./cloudhsmobjectstateenum";



// DescribeHapgResponse
/** 
 * Contains the output of the <a>DescribeHapg</a> action.
**/
export class DescribeHapgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HapgSerial" })
  hapgSerial?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmsLastActionFailed" })
  hsmsLastActionFailed?: string[];

  @SpeakeasyMetadata({ data: "json, name=HsmsPendingDeletion" })
  hsmsPendingDeletion?: string[];

  @SpeakeasyMetadata({ data: "json, name=HsmsPendingRegistration" })
  hsmsPendingRegistration?: string[];

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionSerialList" })
  partitionSerialList?: string[];

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CloudHsmObjectStateEnum;
}
