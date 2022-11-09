import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountStatusEnum } from "./accountstatusenum";


export class GetAccountStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: AccountStatusEnum;
}
