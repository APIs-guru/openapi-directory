import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
