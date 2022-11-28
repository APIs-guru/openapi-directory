import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeHsmRequest
/** 
 * Contains the inputs for the <a>DescribeHsm</a> operation.
**/
export class DescribeHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmSerialNumber" })
  hsmSerialNumber?: string;
}
