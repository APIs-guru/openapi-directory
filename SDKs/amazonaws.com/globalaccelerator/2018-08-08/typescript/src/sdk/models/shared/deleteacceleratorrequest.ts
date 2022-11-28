import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
