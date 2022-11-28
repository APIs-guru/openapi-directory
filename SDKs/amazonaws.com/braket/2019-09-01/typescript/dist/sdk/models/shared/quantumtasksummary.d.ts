import { SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";
/**
 * Includes information about a quantum task.
**/
export declare class QuantumTaskSummary extends SpeakeasyBase {
    createdAt: Date;
    deviceArn: string;
    endedAt?: Date;
    outputS3Bucket: string;
    outputS3Directory: string;
    quantumTaskArn: string;
    shots: number;
    status: QuantumTaskStatusEnum;
    tags?: Map<string, string>;
}
