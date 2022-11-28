import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class UpdateEnrollmentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
