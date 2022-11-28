import { SpeakeasyBase } from "../../../internal/utils";
import { AssetAttributes } from "./assetattributes";
import { AssetTypeEnum } from "./assettypeenum";
import { Attribute } from "./attribute";
import { InspectorServiceAttributes } from "./inspectorserviceattributes";
import { SeverityEnum } from "./severityenum";
/**
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
**/
export declare class Finding extends SpeakeasyBase {
    arn: string;
    assetAttributes?: AssetAttributes;
    assetType?: AssetTypeEnum;
    attributes: Attribute[];
    confidence?: number;
    createdAt: Date;
    description?: string;
    id?: string;
    indicatorOfCompromise?: boolean;
    numericSeverity?: number;
    recommendation?: string;
    schemaVersion?: number;
    service?: string;
    serviceAttributes?: InspectorServiceAttributes;
    severity?: SeverityEnum;
    title?: string;
    updatedAt: Date;
    userAttributes: Attribute[];
}
