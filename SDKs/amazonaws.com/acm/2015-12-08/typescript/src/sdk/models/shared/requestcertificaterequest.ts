import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationOption } from "./domainvalidationoption";
import { CertificateOptions } from "./certificateoptions";
import { Tag } from "./tag";
import { ValidationMethodEnum } from "./validationmethodenum";



export class RequestCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: DomainValidationOption })
  domainValidationOptions?: DomainValidationOption[];

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: CertificateOptions;

  @SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=ValidationMethod" })
  validationMethod?: ValidationMethodEnum;
}
