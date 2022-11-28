import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";



export class PutConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackInputParameters", elemType: ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateBody" })
  templateBody?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateS3Uri" })
  templateS3Uri?: string;
}
