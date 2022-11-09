import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentSummary } from "./componentsummary";


export class ListComponentBuildVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentSummaryList", elemType: shared.ComponentSummary })
  componentSummaryList?: ComponentSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
