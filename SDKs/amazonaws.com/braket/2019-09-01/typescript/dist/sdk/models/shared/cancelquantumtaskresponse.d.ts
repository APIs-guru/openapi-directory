import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CancellationStatusEnum } from "./cancellationstatusenum";
export declare class CancelQuantumTaskResponse extends SpeakeasyBase {
    cancellationStatus: CancellationStatusEnum;
    quantumTaskArn: string;
}
