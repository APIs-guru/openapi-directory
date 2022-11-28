import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSendQuotaResponse
/** 
 * Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
**/
export class GetSendQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  max24HourSend?: number;

  @SpeakeasyMetadata()
  maxSendRate?: number;

  @SpeakeasyMetadata()
  sentLast24Hours?: number;
}
