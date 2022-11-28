import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
export declare class JobRead extends SpeakeasyBase {
    configId: string;
    configType: JobConfigTypeEnum;
    createdAt: number;
    id: number;
    status: JobStatusEnum;
    updatedAt: number;
}
