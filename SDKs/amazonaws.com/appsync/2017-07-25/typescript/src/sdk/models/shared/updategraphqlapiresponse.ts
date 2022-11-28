import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GraphqlApi } from "./graphqlapi";



export class UpdateGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=graphqlApi" })
  graphqlApi?: GraphqlApi;
}
