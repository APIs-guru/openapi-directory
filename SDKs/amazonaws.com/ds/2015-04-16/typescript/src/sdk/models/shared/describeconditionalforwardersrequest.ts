import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeConditionalForwardersRequest
/** 
 * Describes a conditional forwarder.
**/
export class DescribeConditionalForwardersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainNames" })
  remoteDomainNames?: string[];
}
