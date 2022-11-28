import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinuousExportDescription } from "./continuousexportdescription";



export class DescribeContinuousExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions", elemType: ContinuousExportDescription })
  descriptions?: ContinuousExportDescription[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
