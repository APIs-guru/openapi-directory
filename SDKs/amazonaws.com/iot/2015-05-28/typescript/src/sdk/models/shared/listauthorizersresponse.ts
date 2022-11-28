import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerSummary } from "./authorizersummary";



export class ListAuthorizersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizers", elemType: AuthorizerSummary })
  authorizers?: AuthorizerSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
