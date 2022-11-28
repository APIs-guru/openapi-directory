import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vpc } from "./vpc";



export class CreateVpcResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpc?: Vpc;
}
