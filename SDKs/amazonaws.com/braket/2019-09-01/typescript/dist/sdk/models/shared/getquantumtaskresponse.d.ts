import { SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";
export declare class GetQuantumTaskResponse extends SpeakeasyBase {
    createdAt: Date;
    deviceArn: string;
    deviceParameters: string;
    endedAt?: Date;
    failureReason?: string;
    outputS3Bucket: string;
    outputS3Directory: string;
    quantumTaskArn: string;
    shots: number;
    status: QuantumTaskStatusEnum;
    tags?: Map<string, string>;
}
