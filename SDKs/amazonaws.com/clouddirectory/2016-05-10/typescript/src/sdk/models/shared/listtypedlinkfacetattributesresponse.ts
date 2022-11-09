import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";


export class ListTypedLinkFacetAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.TypedLinkAttributeDefinition })
  attributes?: TypedLinkAttributeDefinition[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
