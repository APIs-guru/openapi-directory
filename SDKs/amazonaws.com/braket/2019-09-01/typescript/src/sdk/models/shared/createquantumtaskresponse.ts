import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateQuantumTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantumTaskArn" })
  quantumTaskArn: string;
}
