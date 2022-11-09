import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SynchronousJobRead } from "./synchronousjobread";

export enum CheckConnectionReadStatusEnum {
    Succeeded = "succeeded"
,    Failed = "failed"
}


export class CheckConnectionRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status: CheckConnectionReadStatusEnum;
}
