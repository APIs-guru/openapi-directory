import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


export class PutAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes: Attribute[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;
}
