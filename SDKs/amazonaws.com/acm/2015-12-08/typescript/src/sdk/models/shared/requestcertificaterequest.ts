import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainValidationOption } from "./domainvalidationoption";
import { CertificateOptions } from "./certificateoptions";
import { Tag } from "./tag";
import { ValidationMethodEnum } from "./validationmethodenum";


export class RequestCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=DomainValidationOptions", elemType: shared.DomainValidationOption })
  domainValidationOptions?: DomainValidationOption[];

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=Options" })
  options?: CertificateOptions;

  @Metadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=ValidationMethod" })
  validationMethod?: ValidationMethodEnum;
}
