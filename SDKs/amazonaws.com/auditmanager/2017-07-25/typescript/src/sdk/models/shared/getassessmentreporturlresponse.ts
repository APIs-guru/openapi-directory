import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";



export class GetAssessmentReportUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preSignedUrl" })
  preSignedUrl?: Url;
}
