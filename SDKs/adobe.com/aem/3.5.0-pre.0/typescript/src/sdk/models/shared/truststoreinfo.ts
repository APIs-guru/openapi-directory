import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TruststoreItems } from "./truststoreitems";



export class TruststoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: TruststoreItems })
  aliases?: TruststoreItems[];

  @SpeakeasyMetadata({ data: "json, name=exists" })
  exists?: boolean;
}
