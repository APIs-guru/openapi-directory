import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
export declare class ListResourcesResult extends SpeakeasyBase {
    nextToken?: string;
    resources?: Resource[];
}
