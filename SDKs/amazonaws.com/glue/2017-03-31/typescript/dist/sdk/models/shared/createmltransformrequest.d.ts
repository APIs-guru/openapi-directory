import { SpeakeasyBase } from "../../../internal/utils";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateMlTransformRequest extends SpeakeasyBase {
    description?: string;
    glueVersion?: string;
    inputRecordTables: GlueTable[];
    maxCapacity?: number;
    maxRetries?: number;
    name: string;
    numberOfWorkers?: number;
    parameters: TransformParameters;
    role: string;
    tags?: Map<string, string>;
    timeout?: number;
    transformEncryption?: TransformEncryption;
    workerType?: WorkerTypeEnum;
}
