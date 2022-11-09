import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformParameters } from "./transformparameters";
import { WorkerTypeEnum } from "./workertypeenum";


export class UpdateMlTransformRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

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

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TransformId" })
  transformId: string;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
