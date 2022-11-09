import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GraphqlApi } from "./graphqlapi";


export class CreateGraphqlApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=graphqlApi" })
  graphqlApi?: GraphqlApi;
}
