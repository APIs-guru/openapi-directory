import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvalidateProjectCacheInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectName" })
  projectName: string;
}
