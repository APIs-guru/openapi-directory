import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";



// OperationSummary
/** 
 * Provides summary information for an operation that occurred on an AWS App Runner service.
**/
export class OperationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndedAt" })
  endedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetArn" })
  targetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
