import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GraphqlApi } from "./graphqlapi";



export class ListGraphqlApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=graphqlApis", elemType: GraphqlApi })
  graphqlApis?: GraphqlApi[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
