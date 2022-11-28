import { SpeakeasyBase } from "../../../internal/utils";
import { JobErrorCodeEnum } from "./joberrorcodeenum";
/**
 * Contains the details about the policy generation error.
**/
export declare class JobError extends SpeakeasyBase {
    code: JobErrorCodeEnum;
    message: string;
}
