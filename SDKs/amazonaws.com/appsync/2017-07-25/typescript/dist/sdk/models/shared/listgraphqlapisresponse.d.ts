import { SpeakeasyBase } from "../../../internal/utils";
import { GraphqlApi } from "./graphqlapi";
export declare class ListGraphqlApisResponse extends SpeakeasyBase {
    graphqlApis?: GraphqlApi[];
    nextToken?: string;
}
