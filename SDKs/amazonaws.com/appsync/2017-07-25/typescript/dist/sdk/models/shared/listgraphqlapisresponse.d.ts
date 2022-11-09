import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GraphqlApi } from "./graphqlapi";
export declare class ListGraphqlApisResponse extends SpeakeasyBase {
    graphqlApis?: GraphqlApi[];
    nextToken?: string;
}
