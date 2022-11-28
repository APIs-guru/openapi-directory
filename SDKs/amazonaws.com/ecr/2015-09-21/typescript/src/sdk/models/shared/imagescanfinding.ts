import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { FindingSeverityEnum } from "./findingseverityenum";



// ImageScanFinding
/** 
 * Contains information about an image scan finding.
**/
export class ImageScanFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
