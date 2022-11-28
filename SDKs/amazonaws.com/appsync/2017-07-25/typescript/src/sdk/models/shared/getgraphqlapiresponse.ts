import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GraphqlApi } from "./graphqlapi";



export class GetGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=graphqlApi" })
  graphqlApi?: GraphqlApi;
}
