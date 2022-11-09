import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizerSummary } from "./authorizersummary";


export class ListAuthorizersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizers", elemType: shared.AuthorizerSummary })
  authorizers?: AuthorizerSummary[];

  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
