import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessLogSettings
/** 
 * Access log settings, including the access log format and access log destination ARN.
**/
export class AccessLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;
}
