import { SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationOption } from "./domainvalidationoption";
import { CertificateOptions } from "./certificateoptions";
import { Tag } from "./tag";
import { ValidationMethodEnum } from "./validationmethodenum";
export declare class RequestCertificateRequest extends SpeakeasyBase {
    certificateAuthorityArn?: string;
    domainName: string;
    domainValidationOptions?: DomainValidationOption[];
    idempotencyToken?: string;
    options?: CertificateOptions;
    subjectAlternativeNames?: string[];
    tags?: Tag[];
    validationMethod?: ValidationMethodEnum;
}
