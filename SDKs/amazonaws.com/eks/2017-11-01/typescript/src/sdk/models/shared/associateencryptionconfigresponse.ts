import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Update } from "./update";



export class AssociateEncryptionConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Update;
}
