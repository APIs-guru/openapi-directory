import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GraphqlApi } from "./graphqlapi";



export class CreateGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=graphqlApi" })
  graphqlApi?: GraphqlApi;
}
