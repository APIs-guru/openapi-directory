import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";


export class JobRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId: string;

  @Metadata({ data: "json, name=configType" })
  configType: JobConfigTypeEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: number;
}
