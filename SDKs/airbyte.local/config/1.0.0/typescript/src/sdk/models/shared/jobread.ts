import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";



export class JobRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType: JobConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: number;
}
