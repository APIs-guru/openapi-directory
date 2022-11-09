import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


export class PutAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];
}
