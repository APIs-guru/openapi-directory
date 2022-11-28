import { SpeakeasyBase } from "../../../internal/utils";
import { Authorizer } from "./authorizer";
export declare class GetAuthorizersResponse extends SpeakeasyBase {
    items?: Authorizer[];
    nextToken?: string;
}
