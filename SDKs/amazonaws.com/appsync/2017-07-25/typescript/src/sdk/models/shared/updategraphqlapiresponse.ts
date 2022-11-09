import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GraphqlApi } from "./graphqlapi";


export class UpdateGraphqlApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=graphqlApi" })
  graphqlApi?: GraphqlApi;
}
