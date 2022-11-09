import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";


export class PutConformancePackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackInputParameters", elemType: shared.ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @Metadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @Metadata({ data: "json, name=TemplateBody" })
  templateBody?: string;

  @Metadata({ data: "json, name=TemplateS3Uri" })
  templateS3Uri?: string;
}
