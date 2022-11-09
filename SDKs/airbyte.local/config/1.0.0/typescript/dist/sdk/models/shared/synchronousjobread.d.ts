import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { LogRead } from "./logread";
export declare class SynchronousJobRead extends SpeakeasyBase {
    configId?: string;
    configType: JobConfigTypeEnum;
    createdAt: number;
    endedAt: number;
    id: string;
    logs?: LogRead;
    succeeded: boolean;
}
