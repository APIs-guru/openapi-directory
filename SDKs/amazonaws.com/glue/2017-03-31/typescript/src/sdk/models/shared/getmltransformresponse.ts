import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";



export class GetMlTransformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InputRecordTables", elemType: GlueTable })
  inputRecordTables?: GlueTable[];

  @SpeakeasyMetadata({ data: "json, name=LabelCount" })
  labelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: TransformParameters;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Schema", elemType: SchemaColumn })
  schema?: SchemaColumn[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TransformStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TransformEncryption" })
  transformEncryption?: TransformEncryption;

  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
