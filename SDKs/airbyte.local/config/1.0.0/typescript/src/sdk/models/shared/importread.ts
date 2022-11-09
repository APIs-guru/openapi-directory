import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImportReadStatusEnum {
    Succeeded = "succeeded"
,    Failed = "failed"
}


export class ImportRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status: ImportReadStatusEnum;
}
