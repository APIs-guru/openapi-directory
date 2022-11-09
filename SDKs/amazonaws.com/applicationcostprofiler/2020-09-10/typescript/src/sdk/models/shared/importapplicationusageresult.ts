import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportApplicationUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=importId" })
  importId: string;
}
