import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WithdrawByoipCidrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cidr" })
  cidr: string;
}
