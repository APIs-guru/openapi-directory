import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
**/
export declare class GetSendQuotaResponse extends SpeakeasyBase {
    max24HourSend?: number;
    maxSendRate?: number;
    sentLast24Hours?: number;
}
