import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";



export class ListTypedLinkFacetAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: TypedLinkAttributeDefinition })
  attributes?: TypedLinkAttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
