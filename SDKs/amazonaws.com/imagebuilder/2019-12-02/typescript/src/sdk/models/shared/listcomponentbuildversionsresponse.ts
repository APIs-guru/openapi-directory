import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentSummary } from "./componentsummary";



export class ListComponentBuildVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentSummaryList", elemType: ComponentSummary })
  componentSummaryList?: ComponentSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
