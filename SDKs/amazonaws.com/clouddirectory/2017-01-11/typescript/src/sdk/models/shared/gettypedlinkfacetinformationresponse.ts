import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTypedLinkFacetInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeOrder" })
  identityAttributeOrder?: string[];
}
