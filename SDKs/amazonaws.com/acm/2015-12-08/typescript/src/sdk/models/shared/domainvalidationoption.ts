import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainValidationOption
/** 
 * Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
**/
export class DomainValidationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=ValidationDomain" })
  validationDomain: string;
}
