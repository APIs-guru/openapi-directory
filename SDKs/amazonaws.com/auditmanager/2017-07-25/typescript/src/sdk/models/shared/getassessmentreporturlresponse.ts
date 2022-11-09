import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Url } from "./url";


export class GetAssessmentReportUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=preSignedUrl" })
  preSignedUrl?: Url;
}
