import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Update } from "./update";


export class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=update" })
  update?: Update;
}
