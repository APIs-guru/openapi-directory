import { SpeakeasyBase } from "../../../internal/utils";
import { Integration } from "./integration";
export declare class GetIntegrationsResponse extends SpeakeasyBase {
    items?: Integration[];
    nextToken?: string;
}
