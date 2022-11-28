import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an action that returns a custom HTTP response.
**/
export declare class FixedResponseActionConfig extends SpeakeasyBase {
    contentType?: string;
    messageBody?: string;
    statusCode: string;
}
