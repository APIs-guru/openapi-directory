import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { Pagination } from "./pagination";


export class JobListRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId: string;

  @Metadata({ data: "json, name=configTypes" })
  configTypes: JobConfigTypeEnum[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
