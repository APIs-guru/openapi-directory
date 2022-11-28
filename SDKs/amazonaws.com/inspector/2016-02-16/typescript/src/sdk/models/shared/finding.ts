import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetAttributes } from "./assetattributes";
import { AssetTypeEnum } from "./assettypeenum";
import { Attribute } from "./attribute";
import { InspectorServiceAttributes } from "./inspectorserviceattributes";
import { SeverityEnum } from "./severityenum";



// Finding
/** 
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
**/
export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=assetAttributes" })
  assetAttributes?: AssetAttributes;

  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: AssetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=indicatorOfCompromise" })
  indicatorOfCompromise?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numericSeverity" })
  numericSeverity?: number;

  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAttributes" })
  serviceAttributes?: InspectorServiceAttributes;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: SeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=userAttributes", elemType: Attribute })
  userAttributes: Attribute[];
}
