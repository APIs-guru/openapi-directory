import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetAttributes } from "./assetattributes";
import { AssetTypeEnum } from "./assettypeenum";
import { Attribute } from "./attribute";
import { InspectorServiceAttributes } from "./inspectorserviceattributes";
import { SeverityEnum } from "./severityenum";
import { Attribute } from "./attribute";


// Finding
/** 
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
**/
export class Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=assetAttributes" })
  assetAttributes?: AssetAttributes;

  @Metadata({ data: "json, name=assetType" })
  assetType?: AssetTypeEnum;

  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes: Attribute[];

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=indicatorOfCompromise" })
  indicatorOfCompromise?: boolean;

  @Metadata({ data: "json, name=numericSeverity" })
  numericSeverity?: number;

  @Metadata({ data: "json, name=recommendation" })
  recommendation?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: number;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=serviceAttributes" })
  serviceAttributes?: InspectorServiceAttributes;

  @Metadata({ data: "json, name=severity" })
  severity?: SeverityEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=userAttributes", elemType: shared.Attribute })
  userAttributes: Attribute[];
}
