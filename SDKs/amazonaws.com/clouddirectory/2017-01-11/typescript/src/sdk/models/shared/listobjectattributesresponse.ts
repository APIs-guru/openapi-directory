import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";


export class ListObjectAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
