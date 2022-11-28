import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainValidationOption
/** 
 * Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
**/
export class DomainValidationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationDomain" })
  validationDomain: string;
}
