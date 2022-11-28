import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";
export declare class ListFunctionsResponse extends SpeakeasyBase {
    functions?: FunctionConfiguration[];
    nextToken?: string;
}
