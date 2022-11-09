import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


export class UpdateEnrollmentStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
