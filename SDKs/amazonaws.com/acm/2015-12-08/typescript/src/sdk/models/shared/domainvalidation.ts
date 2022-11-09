import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceRecord } from "./resourcerecord";
import { ValidationMethodEnum } from "./validationmethodenum";
import { DomainStatusEnum } from "./domainstatusenum";


// DomainValidation
/** 
 * Contains information about the validation of each domain name in the certificate.
**/
export class DomainValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=ResourceRecord" })
  resourceRecord?: ResourceRecord;

  @Metadata({ data: "json, name=ValidationDomain" })
  validationDomain?: string;

  @Metadata({ data: "json, name=ValidationEmails" })
  validationEmails?: string[];

  @Metadata({ data: "json, name=ValidationMethod" })
  validationMethod?: ValidationMethodEnum;

  @Metadata({ data: "json, name=ValidationStatus" })
  validationStatus?: DomainStatusEnum;
}
