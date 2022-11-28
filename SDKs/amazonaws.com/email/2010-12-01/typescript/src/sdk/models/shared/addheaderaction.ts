import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddHeaderAction
/** 
 * <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>
**/
export class AddHeaderAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerName: string;

  @SpeakeasyMetadata()
  headerValue: string;
}
