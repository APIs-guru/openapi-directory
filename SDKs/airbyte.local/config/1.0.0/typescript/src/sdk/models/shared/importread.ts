import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImportReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}


export class ImportRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ImportReadStatusEnum;
}
