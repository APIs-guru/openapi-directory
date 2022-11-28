import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessLogSettings
/** 
 * Access log settings, including the access log format and access log destination ARN.
**/
export class AccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;
}
