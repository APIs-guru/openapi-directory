import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeConditionalForwardersRequest
/** 
 * Describes a conditional forwarder.
**/
export class DescribeConditionalForwardersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RemoteDomainNames" })
  remoteDomainNames?: string[];
}
