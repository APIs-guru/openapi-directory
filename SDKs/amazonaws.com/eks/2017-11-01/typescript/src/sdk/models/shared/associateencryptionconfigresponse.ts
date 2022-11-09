import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Update } from "./update";


export class AssociateEncryptionConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=update" })
  update?: Update;
}
