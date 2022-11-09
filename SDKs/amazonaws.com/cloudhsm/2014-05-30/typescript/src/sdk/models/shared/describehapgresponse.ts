import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudHsmObjectStateEnum } from "./cloudhsmobjectstateenum";


// DescribeHapgResponse
/** 
 * Contains the output of the <a>DescribeHapg</a> action.
**/
export class DescribeHapgResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn?: string;

  @Metadata({ data: "json, name=HapgSerial" })
  hapgSerial?: string;

  @Metadata({ data: "json, name=HsmsLastActionFailed" })
  hsmsLastActionFailed?: string[];

  @Metadata({ data: "json, name=HsmsPendingDeletion" })
  hsmsPendingDeletion?: string[];

  @Metadata({ data: "json, name=HsmsPendingRegistration" })
  hsmsPendingRegistration?: string[];

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: string;

  @Metadata({ data: "json, name=PartitionSerialList" })
  partitionSerialList?: string[];

  @Metadata({ data: "json, name=State" })
  state?: CloudHsmObjectStateEnum;
}
