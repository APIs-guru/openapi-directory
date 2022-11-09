import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TruststoreItems } from "./truststoreitems";


export class TruststoreInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: shared.TruststoreItems })
  aliases?: TruststoreItems[];

  @Metadata({ data: "json, name=exists" })
  exists?: boolean;
}
