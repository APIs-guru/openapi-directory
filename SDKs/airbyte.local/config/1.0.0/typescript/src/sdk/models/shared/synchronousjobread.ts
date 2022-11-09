import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { LogRead } from "./logread";


export class SynchronousJobRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configType" })
  configType: JobConfigTypeEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=endedAt" })
  endedAt: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=logs" })
  logs?: LogRead;

  @Metadata({ data: "json, name=succeeded" })
  succeeded: boolean;
}
