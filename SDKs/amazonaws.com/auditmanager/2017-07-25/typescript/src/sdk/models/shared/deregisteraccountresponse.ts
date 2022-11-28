import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusEnum } from "./accountstatusenum";



export class DeregisterAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStatusEnum;
}
