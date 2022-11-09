import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeHsmRequest
/** 
 * Contains the inputs for the <a>DescribeHsm</a> operation.
**/
export class DescribeHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmArn" })
  hsmArn?: string;

  @Metadata({ data: "json, name=HsmSerialNumber" })
  hsmSerialNumber?: string;
}
