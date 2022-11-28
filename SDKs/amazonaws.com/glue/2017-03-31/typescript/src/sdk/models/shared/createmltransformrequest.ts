import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";



export class CreateMlTransformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InputRecordTables", elemType: GlueTable })
  inputRecordTables: GlueTable[];

  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters: TransformParameters;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TransformEncryption" })
  transformEncryption?: TransformEncryption;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
