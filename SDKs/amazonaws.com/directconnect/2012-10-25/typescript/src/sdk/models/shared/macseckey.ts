import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MacSecKey
/** 
 * Information about the MAC Security (MACsec) secret key.
**/
export class MacSecKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=ckn" })
  ckn?: string;

  @Metadata({ data: "json, name=secretARN" })
  secretArn?: string;

  @Metadata({ data: "json, name=startOn" })
  startOn?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
