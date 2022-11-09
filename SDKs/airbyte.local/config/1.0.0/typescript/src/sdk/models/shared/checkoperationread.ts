import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckOperationReadStatusEnum {
    Succeeded = "succeeded"
,    Failed = "failed"
}


export class CheckOperationRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status: CheckOperationReadStatusEnum;
}
