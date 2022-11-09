import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NotFoundKnownExceptionInfo extends SpeakeasyBase {
    exceptionClassName?: string;
    exceptionStack?: string[];
    id?: string;
    message: string;
    rootCauseExceptionClassName?: string;
    rootCauseExceptionStack?: string[];
}
