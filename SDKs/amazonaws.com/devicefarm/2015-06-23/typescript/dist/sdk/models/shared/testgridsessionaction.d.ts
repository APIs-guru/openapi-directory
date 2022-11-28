import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An action taken by a <a>TestGridSession</a> browser instance.
**/
export declare class TestGridSessionAction extends SpeakeasyBase {
    action?: string;
    duration?: number;
    requestMethod?: string;
    started?: Date;
    statusCode?: string;
}
