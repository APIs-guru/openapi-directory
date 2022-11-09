import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NotificationReadStatusEnum {
    Succeeded = "succeeded"
,    Failed = "failed"
}


export class NotificationRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status: NotificationReadStatusEnum;
}
