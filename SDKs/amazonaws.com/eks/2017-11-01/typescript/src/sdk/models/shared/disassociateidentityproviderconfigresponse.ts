import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Update } from "./update";



export class DisassociateIdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Update;
}
