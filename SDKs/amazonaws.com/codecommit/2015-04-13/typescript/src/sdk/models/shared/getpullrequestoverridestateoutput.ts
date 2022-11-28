import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPullRequestOverrideStateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overridden" })
  overridden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overrider" })
  overrider?: string;
}
