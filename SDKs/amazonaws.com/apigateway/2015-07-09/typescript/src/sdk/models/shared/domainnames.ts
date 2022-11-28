import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainName } from "./domainname";



// DomainNames
/** 
 * <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
**/
export class DomainNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DomainName })
  items?: DomainName[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
