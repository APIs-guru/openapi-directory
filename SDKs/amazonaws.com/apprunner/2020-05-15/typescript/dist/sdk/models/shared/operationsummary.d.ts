import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * Provides summary information for an operation that occurred on an AWS App Runner service.
**/
export declare class OperationSummary extends SpeakeasyBase {
    endedAt?: Date;
    id?: string;
    startedAt?: Date;
    status?: OperationStatusEnum;
    targetArn?: string;
    type?: OperationTypeEnum;
    updatedAt?: Date;
}
