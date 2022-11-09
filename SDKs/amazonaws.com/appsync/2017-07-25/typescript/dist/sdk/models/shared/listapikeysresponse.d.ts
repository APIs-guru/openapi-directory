import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKey } from "./apikey";
export declare class ListApiKeysResponse extends SpeakeasyBase {
    apiKeys?: ApiKey[];
    nextToken?: string;
}
