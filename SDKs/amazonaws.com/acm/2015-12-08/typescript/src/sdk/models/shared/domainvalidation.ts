import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { ValidationMethodEnum } from "./validationmethodenum";
import { DomainStatusEnum } from "./domainstatusenum";



// DomainValidation
/** 
 * Contains information about the validation of each domain name in the certificate.
**/
export class DomainValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceRecord" })
  resourceRecord?: ResourceRecord;

  @SpeakeasyMetadata({ data: "json, name=ValidationDomain" })
  validationDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationEmails" })
  validationEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=ValidationMethod" })
  validationMethod?: ValidationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ValidationStatus" })
  validationStatus?: DomainStatusEnum;
}
