import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Authorizer } from "./authorizer";



export class GetAuthorizersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Authorizer })
  items?: Authorizer[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
