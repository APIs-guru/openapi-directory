import { SpeakeasyBase } from "../../../internal/utils";
import { DomainName } from "./domainname";
/**
 * <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
**/
export declare class DomainNames extends SpeakeasyBase {
    items?: DomainName[];
    position?: string;
}
