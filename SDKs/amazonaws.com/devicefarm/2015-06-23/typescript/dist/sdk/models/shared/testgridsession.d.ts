import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";
/**
 * A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
**/
export declare class TestGridSession extends SpeakeasyBase {
    arn?: string;
    billingMinutes?: number;
    created?: Date;
    ended?: Date;
    seleniumProperties?: string;
    status?: TestGridSessionStatusEnum;
}
