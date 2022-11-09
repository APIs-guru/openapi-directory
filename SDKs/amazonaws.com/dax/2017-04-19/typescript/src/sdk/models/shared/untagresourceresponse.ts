import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class UntagResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
