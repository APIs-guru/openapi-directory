import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";


// MlTransform
/** 
 * A structure for a machine learning transform.
**/
export class MlTransform extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=InputRecordTables", elemType: shared.GlueTable })
  inputRecordTables?: GlueTable[];

  @Metadata({ data: "json, name=LabelCount" })
  labelCount?: number;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=MaxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: TransformParameters;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Schema", elemType: shared.SchemaColumn })
  schema?: SchemaColumn[];

  @Metadata({ data: "json, name=Status" })
  status?: TransformStatusTypeEnum;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TransformEncryption" })
  transformEncryption?: TransformEncryption;

  @Metadata({ data: "json, name=TransformId" })
  transformId?: string;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
