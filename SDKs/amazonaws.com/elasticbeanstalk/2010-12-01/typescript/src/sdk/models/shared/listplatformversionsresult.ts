import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";



export class ListPlatformVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PlatformSummary })
  platformSummaryList?: PlatformSummary[];
}
