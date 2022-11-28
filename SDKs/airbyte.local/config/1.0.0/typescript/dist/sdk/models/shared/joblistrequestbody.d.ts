import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { Pagination } from "./pagination";
export declare class JobListRequestBody extends SpeakeasyBase {
    configId: string;
    configTypes: JobConfigTypeEnum[];
    pagination?: Pagination;
}
