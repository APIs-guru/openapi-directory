import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeContinuousExportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportIds" })
  exportIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
