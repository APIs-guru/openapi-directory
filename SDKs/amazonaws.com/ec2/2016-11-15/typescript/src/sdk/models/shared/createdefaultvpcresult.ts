import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vpc } from "./vpc";



export class CreateDefaultVpcResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpc?: Vpc;
}
