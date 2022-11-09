import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @Metadata({ data: "json, name=signatureDateTime" })
  signatureDateTime?: string;

  @Metadata({ data: "json, name=signatureKeyId" })
  signatureKeyId?: string;

  @Metadata({ data: "json, name=signatureValid" })
  signatureValid?: boolean;

  @Metadata({ data: "json, name=validationErrors" })
  validationErrors?: string[];
}
