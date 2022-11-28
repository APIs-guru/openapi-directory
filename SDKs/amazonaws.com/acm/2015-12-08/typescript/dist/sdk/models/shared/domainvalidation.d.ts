import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { ValidationMethodEnum } from "./validationmethodenum";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * Contains information about the validation of each domain name in the certificate.
**/
export declare class DomainValidation extends SpeakeasyBase {
    domainName: string;
    resourceRecord?: ResourceRecord;
    validationDomain?: string;
    validationEmails?: string[];
    validationMethod?: ValidationMethodEnum;
    validationStatus?: DomainStatusEnum;
}
