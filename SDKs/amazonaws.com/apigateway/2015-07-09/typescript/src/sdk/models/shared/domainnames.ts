import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainName } from "./domainname";


// DomainNames
/** 
 * <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
**/
export class DomainNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DomainName })
  items?: DomainName[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
