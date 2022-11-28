import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcLink } from "./vpclink";



// VpcLinks
/** 
 * <p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div>
**/
export class VpcLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: VpcLink })
  items?: VpcLink[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
