import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportApplicationUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId: string;
}
