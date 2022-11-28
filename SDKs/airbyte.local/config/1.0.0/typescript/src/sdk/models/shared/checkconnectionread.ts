import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";


export enum CheckConnectionReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}


export class CheckConnectionRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobInfo" })
  jobInfo: SynchronousJobRead;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckConnectionReadStatusEnum;
}
