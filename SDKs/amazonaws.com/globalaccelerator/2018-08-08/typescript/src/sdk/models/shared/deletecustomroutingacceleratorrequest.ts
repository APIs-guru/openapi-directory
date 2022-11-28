import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
