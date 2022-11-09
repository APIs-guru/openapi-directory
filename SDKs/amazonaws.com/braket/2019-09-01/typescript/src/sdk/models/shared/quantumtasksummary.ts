import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";


// QuantumTaskSummary
/** 
 * Includes information about a quantum task.
**/
export class QuantumTaskSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @Metadata({ data: "json, name=endedAt" })
  endedAt?: Date;

  @Metadata({ data: "json, name=outputS3Bucket" })
  outputS3Bucket: string;

  @Metadata({ data: "json, name=outputS3Directory" })
  outputS3Directory: string;

  @Metadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;

  @Metadata({ data: "json, name=shots" })
  shots: number;

  @Metadata({ data: "json, name=status" })
  status: QuantumTaskStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
