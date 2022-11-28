import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerSummary } from "./authorizersummary";
export declare class ListAuthorizersResponse extends SpeakeasyBase {
    authorizers?: AuthorizerSummary[];
    nextMarker?: string;
}
