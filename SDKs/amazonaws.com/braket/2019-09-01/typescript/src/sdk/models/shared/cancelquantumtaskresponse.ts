import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CancellationStatusEnum } from "./cancellationstatusenum";


export class CancelQuantumTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationStatus" })
  cancellationStatus: CancellationStatusEnum;

  @Metadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;
}
