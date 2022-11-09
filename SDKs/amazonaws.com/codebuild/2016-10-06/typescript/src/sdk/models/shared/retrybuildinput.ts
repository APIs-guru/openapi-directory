import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetryBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
