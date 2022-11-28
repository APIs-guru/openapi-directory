import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FixedResponseActionConfig
/** 
 * Information about an action that returns a custom HTTP response.
**/
export class FixedResponseActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType?: string;

  @SpeakeasyMetadata()
  messageBody?: string;

  @SpeakeasyMetadata()
  statusCode: string;
}
