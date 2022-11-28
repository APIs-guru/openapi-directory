import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CheckOperationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}


export class CheckOperationRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckOperationReadStatusEnum;
}
