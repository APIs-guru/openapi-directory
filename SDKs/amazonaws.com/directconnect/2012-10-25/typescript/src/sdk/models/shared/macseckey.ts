import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MacSecKey
/** 
 * Information about the MAC Security (MACsec) secret key.
**/
export class MacSecKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ckn" })
  ckn?: string;

  @SpeakeasyMetadata({ data: "json, name=secretARN" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=startOn" })
  startOn?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
