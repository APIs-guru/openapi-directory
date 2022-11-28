import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExportConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportIds" })
  exportIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
