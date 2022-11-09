import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;
}
