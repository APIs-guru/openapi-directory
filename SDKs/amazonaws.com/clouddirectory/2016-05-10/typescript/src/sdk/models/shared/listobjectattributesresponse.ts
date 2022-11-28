import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



export class ListObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
