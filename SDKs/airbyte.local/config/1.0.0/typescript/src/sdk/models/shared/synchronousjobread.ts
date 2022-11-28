import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { LogRead } from "./logread";



export class SynchronousJobRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType: JobConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=endedAt" })
  endedAt: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=logs" })
  logs?: LogRead;

  @SpeakeasyMetadata({ data: "json, name=succeeded" })
  succeeded: boolean;
}
