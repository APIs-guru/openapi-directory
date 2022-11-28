import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { Pagination } from "./pagination";



export class JobListRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "json, name=configTypes" })
  configTypes: JobConfigTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
