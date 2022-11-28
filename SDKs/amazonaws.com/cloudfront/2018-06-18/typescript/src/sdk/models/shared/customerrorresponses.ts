import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomErrorResponse } from "./customerrorresponse";



// CustomErrorResponses
/** 
 * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
export class CustomErrorResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomErrorResponse })
  items?: CustomErrorResponse[];

  @SpeakeasyMetadata()
  quantity: number;
}
