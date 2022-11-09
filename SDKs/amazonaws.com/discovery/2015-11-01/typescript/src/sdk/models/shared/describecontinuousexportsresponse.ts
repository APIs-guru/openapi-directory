import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContinuousExportDescription } from "./continuousexportdescription";


export class DescribeContinuousExportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions", elemType: shared.ContinuousExportDescription })
  descriptions?: ContinuousExportDescription[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
