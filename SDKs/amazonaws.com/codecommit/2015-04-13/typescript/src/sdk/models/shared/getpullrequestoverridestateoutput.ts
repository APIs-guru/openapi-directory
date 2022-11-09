import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPullRequestOverrideStateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=overridden" })
  overridden?: boolean;

  @Metadata({ data: "json, name=overrider" })
  overrider?: string;
}
