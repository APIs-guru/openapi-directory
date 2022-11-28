import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConformancePackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackArn" })
  conformancePackArn?: string;
}
