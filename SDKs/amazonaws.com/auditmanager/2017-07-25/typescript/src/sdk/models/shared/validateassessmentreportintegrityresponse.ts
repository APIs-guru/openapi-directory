import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureDateTime" })
  signatureDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureKeyId" })
  signatureKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureValid" })
  signatureValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationErrors" })
  validationErrors?: string[];
}
