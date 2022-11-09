import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConformancePackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;
}
