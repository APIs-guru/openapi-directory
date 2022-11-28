import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WithdrawByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cidr" })
  cidr: string;
}
