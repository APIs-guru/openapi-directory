import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusEnum } from "./accountstatusenum";



export class RegisterAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStatusEnum;
}
