import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InvalidInputProperty } from "./invalidinputproperty";
export declare class InvalidInputExceptionInfo extends SpeakeasyBase {
    exceptionClassName?: string;
    exceptionStack?: string[];
    message: string;
    validationErrors: InvalidInputProperty[];
}
