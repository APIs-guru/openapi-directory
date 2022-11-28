import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkAcl } from "./networkacl";



export class CreateNetworkAclResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkAcl?: NetworkAcl;
}
