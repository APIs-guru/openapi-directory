import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";


// OperationSummary
/** 
 * Provides summary information for an operation that occurred on an AWS App Runner service.
**/
export class OperationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndedAt" })
  endedAt?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=TargetArn" })
  targetArn?: string;

  @Metadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
