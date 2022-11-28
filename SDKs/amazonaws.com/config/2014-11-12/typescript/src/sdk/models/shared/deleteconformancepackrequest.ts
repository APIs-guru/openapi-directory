import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;
}
