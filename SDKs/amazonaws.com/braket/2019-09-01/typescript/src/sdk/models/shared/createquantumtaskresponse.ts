import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateQuantumTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;
}
