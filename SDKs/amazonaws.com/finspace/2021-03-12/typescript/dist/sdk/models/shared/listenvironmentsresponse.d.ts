import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: Environment[];
    nextToken?: string;
}
