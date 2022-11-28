import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



export class GetObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];
}
