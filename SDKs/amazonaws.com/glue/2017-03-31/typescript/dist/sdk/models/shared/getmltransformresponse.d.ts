import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class GetMlTransformResponse extends SpeakeasyBase {
    createdOn?: Date;
    description?: string;
    evaluationMetrics?: EvaluationMetrics;
    glueVersion?: string;
    inputRecordTables?: GlueTable[];
    labelCount?: number;
    lastModifiedOn?: Date;
    maxCapacity?: number;
    maxRetries?: number;
    name?: string;
    numberOfWorkers?: number;
    parameters?: TransformParameters;
    role?: string;
    schema?: SchemaColumn[];
    status?: TransformStatusTypeEnum;
    timeout?: number;
    transformEncryption?: TransformEncryption;
    transformId?: string;
    workerType?: WorkerTypeEnum;
}
