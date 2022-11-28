import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerScopeType } from "./resourceserverscopetype";
export declare class CreateResourceServerRequest extends SpeakeasyBase {
    identifier: string;
    name: string;
    scopes?: ResourceServerScopeType[];
    userPoolId: string;
}
