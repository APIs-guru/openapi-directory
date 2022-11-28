import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidateProjectCacheInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;
}
