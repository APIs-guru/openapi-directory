import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NotificationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}


export class NotificationRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: NotificationReadStatusEnum;
}
