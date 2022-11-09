import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GraphqlApi } from "./graphqlapi";


export class ListGraphqlApisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=graphqlApis", elemType: shared.GraphqlApi })
  graphqlApis?: GraphqlApi[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
