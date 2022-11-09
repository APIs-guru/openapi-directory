import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { FindingSeverityEnum } from "./findingseverityenum";


// ImageScanFinding
/** 
 * Contains information about an image scan finding.
**/
export class ImageScanFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
