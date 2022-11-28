import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";



// QuantumTaskSummary
/** 
 * Includes information about a quantum task.
**/
export class QuantumTaskSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=endedAt" })
  endedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=outputS3Bucket" })
  outputS3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=outputS3Directory" })
  outputS3Directory: string;

  @SpeakeasyMetadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=shots" })
  shots: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: QuantumTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
