import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancellationStatusEnum } from "./cancellationstatusenum";



export class CancelQuantumTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationStatus" })
  cancellationStatus: CancellationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;
}
