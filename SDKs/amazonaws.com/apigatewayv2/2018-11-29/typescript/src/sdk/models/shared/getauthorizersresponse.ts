import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Authorizer } from "./authorizer";


export class GetAuthorizersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Authorizer })
  items?: Authorizer[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
